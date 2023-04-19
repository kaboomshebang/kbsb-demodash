# include environment variables in every sub-shell
include .env
include .aws/.env
include .make.docker
include .make.pytest
# all targets refer to tasks (instead of files)
.PHONY: *

# set Make variables
ECR_DOMAIN := $(AWS_ACCOUNT_ID).dkr.ecr.$(AWS_REGION).amazonaws.com


######## FASTAPI local development

# app:app refers to app.py app function
api:
	export LOCAL=1 && uvicorn --host 0.0.0.0 app:app --reload

pytest-local:
	export TEST_URL="$(PYTEST_URL_LOCAL)" && pytest -s -k test_endpoints
# `pytest -s` includes stdout

pytest-docker:
	export TEST_URL="$(PYTEST_URL_DOCKER)"; export TEST_DOCKER=1 && pytest -s -k test_endpoints

pytest-prod:
	export TEST_URL="$(PYTEST_URL_LAMBDA)" && pytest -s -k test_endpoints

######## AWS Authentication

login:
	aws sso login

# aws ecr get-login-password --region $(AWS_region) | docker login --username AWS --password-stdin .dkr.ecr.eu-central-1.amazonaws.com
auth:
	aws ecr get-login-password --region $(AWS_REGION) | docker login --username AWS --password-stdin $(ECR_DOMAIN)

repo:
	aws ecr create-repository \
		--repository-name "$(ECR_DOCKER_REPO_NAME)" \
		--image-scanning-configuration scanOnPush=true \
		--region "$(AWS_REGION)"

iamrole:
	aws iam create-role --role-name lambda-ex --assume-role-policy-document '{"Version": "2012-10-17","Statement": [{ "Effect": "Allow", "Principal": {"Service": "lambda.amazonaws.com"}, "Action": "sts:AssumeRole"}]}'
	aws iam attach-role-policy --role-name lambda-ex --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
	aws iam attach-role-policy --role-name lambda-ex --policy-arn arn:aws:iam::aws:policy/AWSXRayDaemonWriteAccess

######## DOCKER tasks

build:
	docker build -t "$(ECR_DOCKER_IMAGE_NAME)" .

run:
	docker run --env-file .env -e LOG_LEVEL=DEBUG -e LOCAL=1 -p 9000:8080 "$(ECR_DOCKER_IMAGE_NAME)"

shell:
	docker run -it --entrypoint /bin/bash -p 9000:8080 "$(ECR_DOCKER_IMAGE_NAME)"

logs:
	docker logs "$(ECR_DOCKER_IMAGE_NAME)"

tag:
	docker tag "$(ECR_DOCKER_IMAGE_NAME)" "$(ECR_DOMAIN)"/"$(ECR_DOCKER_REPO_NAME)"

push:
	docker push "$(ECR_DOMAIN)"/"$(ECR_DOCKER_REPO_NAME)"

######## AWS tasks

lambda-create:
	aws lambda create-function \
	--region "$(AWS_REGION)" \
	--function-name "$(LAMBDA_FUNCTION_NAME)" \
    --package-type Image \
    --code ImageUri="$(ECR_DOMAIN)"/"$(ECR_DOCKER_REPO_NAME)":latest \
    --role arn:aws:iam::$(AWS_ARN):role/lambda-ex

lambda-url:
	aws lambda create-function-url-config \
	--function-name "$(LAMBDA_FUNCTION_NAME)" \
	--auth-type NONE

lambda-get-url:
	aws lambda get-function-url-config --function-name "$(LAMBDA_FUNCTION_NAME)"

lambda-public:
	aws lambda add-permission \
    --function-name "$(LAMBDA_FUNCTION_NAME)" \
    --action lambda:invokeFunctionUrl \
    --statement-id FunctionURLAllowPublicAccess \
    --principal "*" \
	--cli-input-json '{"FunctionUrlAuthType":"NONE"}'

lambda-update:
	aws lambda update-function-code \
	--region "$(AWS_REGION)" \
	--function-name "$(LAMBDA_FUNCTION_NAME)" \
    --image-uri "$(ECR_DOMAIN)"/"$(ECR_DOCKER_REPO_NAME)":latest

lambda-env:
	aws lambda update-function-configuration \
	--function-name "$(LAMBDA_FUNCTION_NAME)" \
	--environment Variables={CORS_DOMAIN="$(CORS_DOMAIN)",AIRTABLE_API_KEY="$(AIRTABLE_API_KEY)",AIRTABLE_BASE_ID="$(AIRTABLE_BASE_ID)",AIRTABLE_TABLE_NAME="$(AIRTABLE_TABLE_NAME)"}

invoke:
	aws lambda invoke --function-name "$(LAMBDA_FUNCTION_NAME)" output.json

# run update to publish changes
update: build tag push lambda-update
