# Documentation

How to reproduce this project.

> Note: review the `Makefile`s to determine which AWS and Docker commands are executed.


Git repo
-----------------------------------------------

```sh
# clone the repo with SSH
git clone git@github.com:kaboomshebang/kbsb-demodash.git
# without SSH
git clone https://github.com/kaboomshebang/kbsb-demodash.git
```



Prerequisites
-----------------------------------------------

The project depends on the following packages.

- Docker
- Python3 (3.9.16)
	- `pip`
- Node (18.15.0)
	- `pnpm`
- GNU Make
- AWS CLI v2
- Rclone (optional)

Install instructions for the Nix package manager:

```sh
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

First, setup all the necessary configuration.

- Airtable database
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
		- store the credentials
		- refer to the `.env.example` for more info
	- create a shared view link and copy the url


- AWS credentials
	- optional: create a new AWS account with `AWS Organizations` 
	- login to the AWS console
	- create an IAM user for deployment and Github CI/CD
		- for example: `projectname-deploy`
		- add the inline policies from the code block below
	- create an access key for the new user
	- store key in `lambdas/todos/.aws/.env` and/or Github Actions
		- refer to the `.env.template` for more info

> Note: updating policies can take some time!

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "demodash",
            "Effect": "Allow",
            "Action": [
				"lambda:UpdateFunctionCode",
				"lambda:InvokeFunction",
				"lambda:CreateFunction",
				"lambda:CreateFunctionUrlConfig",
				"lambda:AddPermission",
				"lambda:UpdateFunctionConfiguration",
				"iam:PassRole",
				"iam:CreateRole",
				"iam:AttachRolePolicy",
				"ecr:CreateRepository",
				"ecr:SetRepositoryPolicy",
				"ecr:GetDownloadUrlForLayer",
				"ecr:BatchGetImage",
				"ecr:CompleteLayerUpload",
				"ecr:DescribeImages",
				"ecr:DescribeRepositories",
				"ecr:UploadLayerPart",
				"ecr:ListImages",
				"ecr:InitiateLayerUpload",
				"ecr:BatchCheckLayerAvailability",
				"ecr:GetRepositoryPolicy",
				"ecr:PutImage",
				"ecr:GetAuthorizationToken"
            ],
            "Resource": [
                "*"
            ]
        }
    ]
}
```

Make sure that the key works:

```sh
# verify AWS credentials
source lambdas/todos/.aws/.env && aws sts get-caller-identity
```

- frontend `.env.development`
	- set the `VITE_ENDPOINT`
		- for example: `http://localhost:8000/new_todo`
		- **or replace `localhost` with your vm/devserver ip**
	- set the `VITE_AIRTABLE_BASE`
		- copy-paste the Airtable shared view URL
- frontend `env.production`
	- > set the production environment later in this guide

- CORS domain
	- if you also want to deploy to production later:
		- set `CORS_DOMAIN` in `lambdas/todos/.env`

- Pytest config
	- set `url_local` in `lambdas/todos/.make.pytest`
		- default: `http://localhost:8000`

> The project is now ready for local testing without Docker



Local development
-----------------------------------------------

Before deploying let's test the configuration with a local setup.

### Backend

Start with the backend. Run a FastAPI dev server.

```sh
# create Python environment
cd lambdas/todos
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# run the development server
make api
# test the endpoint
make pytest-local # make sure the .venv is activated
# verify in Airtable
```

### Frontend

Open a React/Vite development server.

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

We need to store the Docker container image in AWS. Let's create a repository.

- config `lambdas/todos/.make.docker`:
	- set `region`
	- set `docker-repo` (or use default value)
	- set `image_name` (or use default value)
	- set `ecr` after the following command

```sh
# create ECR repository
make repo
```

- copy the value of `reposityUri` without the repo
	- `aws_account_id.dkr.ecr.region.amazonaws.com`
- edit `lambdas/todos/.make.docker`:
	- and set the value to the `ecr` variable

[AWS Docs](https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html#cli-create-repository)

#### Test Docker locally

Now we can test the Docker build commands and the container locally.

```sh
# build the image
make build
# run the container
make run
# test the function
make pytest-docker
# verify the Airtable shared view
```

> The project is ready to deploy.


### Deploy backend to production

If everything works, lets continue with the production deployment.

#### Create an IAM role

We need a role for the Lambda execution.

```sh
# create an IAM role
make iamrole
```

Copy the 12-digit id of the `Arn` role
- set the value to the `arn` variable in `lambdas/todos/.make.docker`

#### Create the Lambda function

Before we can deploy the image/container we need to create the function.

```sh
# create the function
make lambda-create
# test
make invoke
# create a function url
make lambda-url
# allow public access
make lambda-public
# set the Airtable environment variables
make lambda-env
```


#### Deploy

Now we're finally ready to push the Docker image and update the function.

```sh
# login in to the registry
make auth
# deploy container
make update
```

- Copy the `FunctionUrl` and set the value to the `url_lambda` variable in:
	- `lambdas/todos/.make.pytest` for the backend
	- and `.env.production` for the frontend

```sh
# test production endpoint
make pytest-prod
``` 

> Verify the deployment in Airtable


### Deploy frontend to production

Last step, deploy the React app to a S3 bucket. First, test the build process.

> Remember to set the correct endpoint in `.env.production` and `lambdas/todos/.env`

```sh
# from the frontend directory
# build the app
make build
# test build
make preview
# note: the production URL blocks CORS from localhost
```

- AWS S3 (or similar)
	- open the AWS console
	- open S3 page
	- create a bucket
	- copy the `dist` folder to your bucket
	- enable bucket websites
	- test the production URL
	- create a CNAME record in your DNS provider
		- point it to the S3 bucket-website


#### Rclone

You can use Rclone to automate the synchronization with S3. Review the CI/CD config in the `.github` directory for some reference.



Update CI/CD
-----------------------------------------------

- Automate the deployment with Github Actions:
	- fork the repository
	- first follow all the above steps to create a manual deployment
		- so that all the environment variables and policies are set
	- edit `.github/workflows/deploy.yml`
	- set all the correct environment variables
	- push to/merge with `main`
