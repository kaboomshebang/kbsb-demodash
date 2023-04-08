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

# app:app refers to app.py app function
api:
	uvicorn --host 0.0.0.0 app:app --reload

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
