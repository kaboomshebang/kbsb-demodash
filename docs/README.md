# Documentation

How to reproduce this project.



Git repo
-----------------------------------------------

```sh
# clone the repo
git clone git@github.com:kaboomshebang/kbsb-demodash.git
```



Prerequisites
-----------------------------------------------

- Docker
- Python3 (3.9.16)
	- `pip`
- Node (18.15.0)
	- `pnpm`
- AWS CLI v2
- Rclone (optional)

```sh
# install instructions for the Nix package manager
nix-env -iA \
	nixpkgs.python39 \
	nixpkgs.python39Packages.pip \
	nixpkgs.nodejs-18_x \
	nixpkgs.nodePackages_latest.pnpm \
	nixpkgs.awscli2 \
	nixpkgs.rclone
```

> Optional: use the Nix package manager with `direnv` for an automated dev. environment.



Project settings
-----------------------------------------------

- Airtable
	- create a new base
	- create a `todos` table with the following columns
		- `id` (Autonumber)
		- `description` (Long text)
		- `label` (Single select)
		- `done` (Checkbox)
	- create a [personal access token](https://airtable.com/create/tokens)
		- scope: `data.records:read`, `data.records:write`
		- access: only the current base
	- create a `.env` file in `lambdas/todos/`
		- refer to the `.env.example` for more info
	- create a shared view link and copy the url

> optional: create a new AWS account with `AWS Organizations` 

- AWS
	- login to the AWS console
	- create an IAM user for deployment and Github CI/CD
		- for example: `projectname-deploy`
		- attach the following policies:
			- Lambda: `AWSLambdaBasicExecutionRole`
			- Lambda: `AWSXRayDaemonWriteAccess`
			- ECR: `AmazonElasticContainerRegistryPublicPowerUser`
	- create an access key for the new user
	- store key in `lambdas/todos/.aws/.env` and/or Github Actions
		- refer to the `.env.template` for more info

- frontend `.env.development`
	- set the `VITE_ENDPOINT`
		- for example: `http://localhost:8000/new_todo`
	- set the `VITE_AIRTABLE_BASE`
		-  copy-paste the Airtable shared view URL
- frontend `env.production`
	- set the production environment later in this guide

- CORS domain
	- if you want to deploy to production later:
		- set `CORS_DOMAIN` in `lambdas/todos/.env`

- Pytest config
	- set `url_local` in `lambdas/todos/.env.make.pytest`
		- for example: `http://localhost:8000`

> The project is now ready for local testing without Docker



Local development
-----------------------------------------------

### Backend

Start with the backend.

```sh
# create Python environment
cd lambdas/todos
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# run the development server
make api
# test the endpoint
make pytest-local
# verify in Airtable
```

### Frontend

```sh
# install node_modules and run the development server
make dev
# open the Vite development url
```

> Verify the endpoint with the todo widget.



Deploy to production
-----------------------------------------------

> Make sure Docker is installed

### Create a private AWS ECR container repository

- config `lambdas/todos/.env.make.docker`:
	- set `region`
	- set `docker-repo` (or use default value)
	- set `image_name` (or use default value)

```sh
# create ECR repository
make repo
# save the output
```

- config `lambdas/todos/.env.make.docker`:
	- set `ecr` value to the output of the make command 
	- `aws_account_id.dkr.ecr.region.amazonaws.com`

[AWS Docs](https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html#cli-create-repository)

#### Test Docker locally

```sh
# build the image
make build
# run the container
make run
# test the function
make pytest-docker
```

### Deploy to production

- [ ] How can you find the Lambda URL with AWS CLI

- Copy paste the function endpoint url and set the `url_lambda` value in:
	- `lambdas/todos/.env.make.pytest` for the backend
	- and `.env.production` for the frontend

> The project is ready to deploy.

```sh
# login in to the registry
make auth
# deploy container
make update
# test production endpoint
make pytest-prod
``` 

> Verify the deployment in Airtable


### Deploy frontend to production

Test the build process.

```sh
# from the frontend directory
# build the app
make build
# test build
make preview
# note: the production URL blocks CORS from localhost
```

- AWS S3 (or similar)
	- copy the `dist` folder to your bucket
	- enable bucket websites
	- test the production URL

> Remember to set the correct endpoint in `.env.production`

#### Rclone

You can use Rclone to automate the synchronization with S3.



Update CI/CD
-----------------------------------------------

- Automate the prodcution with Github Actions:
	- fork the repository
	- edit `.github/workflows/deploy.yml`
	- set all the correct environment variables
