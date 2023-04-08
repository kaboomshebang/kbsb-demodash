# include environment variables in every sub-shell
include .aws/.env
# all targets refer to tasks (instead of files)
.PHONY: *

ecr = 011809624525.dkr.ecr.eu-central-1.amazonaws.com
region = eu-central-1
image_name = kbsb-demodash-todos
docker_repo = kbsb-demodash
function_name = todos

######## FASTAPI local development

url_local = http://100.111.214.8:8000
url_docker = http://localhost:9000/2015-03-31/functions/function/invocations
url_lambda = https://jchv4b5lpu5gea3lkowr5g2bei0tpnsl.lambda-url.eu-central-1.on.aws

# app:app refers to app.py app function
api:
	uvicorn --host 0.0.0.0 app:app --reload

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

######## DOCKER tasks

build:
	docker build -t "$(image_name)" .

run:
	docker run --env-file .env -e LOG_LEVEL=DEBUG -p 9000:8080 "$(image_name)"

shell:
	docker run -it --entrypoint /bin/bash -p 9000:8080 "$(image_name)"

tag:
	docker tag "$(image_name)" "$(ecr)"/"$(docker_repo)"

push:
	docker push "$(ecr)"/"$(docker_repo)"

lambda:
	aws lambda update-function-code \
	--region "$(region)" \
	--function-name "$(function_name)" \
    --image-uri "$(ecr)"/"$(docker_repo)":latest

invoke:
	aws lambda invoke --function-name "$(function_name)" output.json

update: build tag push lambda

logs:
	docker logs "$(image_name)"
