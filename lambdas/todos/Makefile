# include environment variables in every sub-shell
include .env
include .aws/.env
include .make.docker
include .make.pytest
# all targets refer to tasks (instead of files)
.PHONY: *

######## FASTAPI local development

# app:app refers to app.py app function
api:
	export LOCAL=1 && uvicorn --host 0.0.0.0 app:app --reload

pytest-local:
	export TEST_URL="$(url_local)" && pytest -s -k test_endpoints
# `pytest -s` includes stdout

pytest-docker:
	export TEST_URL="$(url_docker)"; export TEST_DOCKER=1 && pytest -s -k test_endpoints

pytest-prod:
	export TEST_URL="$(url_lambda)" && pytest -s -k test_endpoints

######## AWS Authentication

login:
	aws sso login

auth:
	aws ecr get-login-password --region "$(region)" | docker login --username AWS --password-stdin "$(ecr)"

repo:
	aws ecr create-repository \
		--repository-name "$(docker_repo)" \
		--image-scanning-configuration scanOnPush=true \
		--region "$(region)"

iamrole:
	aws iam create-role --role-name lambda-ex --assume-role-policy-document '{"Version": "2012-10-17","Statement": [{ "Effect": "Allow", "Principal": {"Service": "lambda.amazonaws.com"}, "Action": "sts:AssumeRole"}]}'
	aws iam attach-role-policy --role-name lambda-ex --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
	aws iam attach-role-policy --role-name lambda-ex --policy-arn arn:aws:iam::aws:policy/AWSXRayDaemonWriteAccess

######## DOCKER tasks

build:
	docker build -t "$(image_name)" .

run:
	docker run --env-file .env -e LOG_LEVEL=DEBUG -e LOCAL=1 -p 9000:8080 "$(image_name)"

shell:
	docker run -it --entrypoint /bin/bash -p 9000:8080 "$(image_name)"

logs:
	docker logs "$(image_name)"

tag:
	docker tag "$(image_name)" "$(ecr)"/"$(docker_repo)"

push:
	docker push "$(ecr)"/"$(docker_repo)"

######## AWS tasks

lambda-create:
	aws lambda create-function \
	--region "$(region)" \
	--function-name "$(function_name)" \
    --package-type Image \
    --code ImageUri="$(ecr)"/"$(docker_repo)":latest \
    --role arn:aws:iam::$(arn):role/lambda-ex

lambda-url:
	aws lambda create-function-url-config \
	--function-name "$(function_name)" \
	--auth-type NONE

lambda-public:
	aws lambda add-permission \
    --function-name "$(function_name)" \
    --action lambda:invokeFunctionUrl \
    --statement-id FunctionURLAllowPublicAccess \
    --principal "*" \
	--cli-input-json '{"FunctionUrlAuthType":"NONE"}'

lambda-update:
	aws lambda update-function-code \
	--region "$(region)" \
	--function-name "$(function_name)" \
    --image-uri "$(ecr)"/"$(docker_repo)":latest

lambda-env:
	aws lambda update-function-configuration \
	--function-name "$(function_name)" \
	--environment Variables={AIRTABLE_API_KEY="$(AIRTABLE_API_KEY)",AIRTABLE_BASE_ID="$(AIRTABLE_BASE_ID)",AIRTABLE_TABLE_NAME="$(AIRTABLE_TABLE_NAME)"}

invoke:
	aws lambda invoke --function-name "$(function_name)" output.json

# run update to publish changes
update: build tag push lambda-update
