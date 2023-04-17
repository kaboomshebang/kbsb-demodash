# Documentation

How to reproduce this project.


## Prerequisites
-----------------------------------------------

- Python 3.9
- Node 18 LTS with `pnpm`
- AWS CLI v2
- optional: Rclone

> Optional: use the Nix package manager with `direnv` for an automated dev. environment.

## Git
-----------------------------------------------


```sh
git clone XXXXXXXXXXXXXXXXXXXXXXx
```

## Project settings
-----------------------------------------------

- Set the following environment variables
    - set a value for the CORS policy origin
    - `.env`
    - set credentials for Airtable
    - Airtable schema
        - column id (autoID)
        - column text (single line)
        - column checkbox


## Local development
-----------------------------------------------

- Which Makefile commands???



## Deploy backend to production
-----------------------------------------------

Deploy to AWS

### AWS settings

- optional: in `AWS Organizations` create a new AWS account and login
- create an IAM user for deployment and Github CI/CD
  - for example: `projectname-deploy`
  - attach the following policies:
    - Lambda: `AWSLambdaBasicExecutionRole`
    - Lambda: `AWSXRayDaemonWriteAccess`
    - ECR: `AmazonElasticContainerRegistryPublicPowerUser`
  - create an access key
  - store key in `lambdas/todos/.aws/.env` and/or Github Actions
  - login??????????

### Create a private AWS ECR container repository

```sh
# https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html#cli-create-repository

# set region and repo name
aws ecr create-repository \
    --repository-name hello-repository \
    --image-scanning-configuration scanOnPush=true \
    --region region
```

- [ ] Add this to the Make file as a target

```
aws_account_id.dkr.ecr.region.amazonaws.com/your-repo-name
```

- go to AWS ECR, go to repositories
    - create a private repository
    - `XXXXXXXXXXX.dkr.ecr.eu-central-1.amazonaws.com/XXXXXXXXXXXX`
    - [ ] what is the CLI command to create a private repo?

### Create a Airtable database

- with the following schema
  - [ ] look up the column names
- create an API key
  - give limited persmissions
    - read/write access to your table


### Environment config

```
AIRTABLE_API_KEY=api_key
AIRTABLE_BASE_ID=base_id
AIRTABLE_TABLE_NAME=table_name
```

Config the environment
- Set all your values in `.env.make`

### Makefiles

Ready to run all Make commands
- run the following Make command to deploy the backend
    - `make auth` for container registry login
    - `make update` for serverless function deployment


## Deploy frontend to production
-----------------------------------------------

Next set the correct endpoint in `.env.production`
Set the correct `.env` files.
- `.env.developemnt for local development

Final step: run:
- `make build`

requirements: Rclone
- [ ] create make commands to deploy frontend to S3 with Rclone
- [ ] create 

## Update CI/CD
-----------------------------------------------

- [ ] Set all the CI/CD environment variables in Githb ACtions
- [ ] Fork repo, and push to main.
- [ ] Go to your bucket website.
- [ ] Or Vercel.
