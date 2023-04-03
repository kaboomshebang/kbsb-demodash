# include environment variables in every sub-shell
include .aws/.env
# all targets refer to tasks (instead of files)
.PHONY: *

######## FASTAPI local development

# app:app refers to app.py app function
api:
	uvicorn --host 0.0.0.0 app:app --reload

######## AWS Authentication

login:
	aws sso login

auth:
	aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin 011809624525.dkr.ecr.eu-central-1.amazonaws.com

######## DOCKER tasks

build:
	docker build -t kbsb-demodash-todos .

run:
	docker run --env-file .env -p 9000:8080 kbsb-demodash-todos

shell:
	docker run -it --entrypoint /bin/bash -p 9000:8080 kbsb-demodash-todos

tag:
	docker tag kbsb-demodash-todos 011809624525.dkr.ecr.eu-central-1.amazonaws.com/kbsb-demodash

push:
	docker push 011809624525.dkr.ecr.eu-central-1.amazonaws.com/kbsb-demodash

lambda:
	aws lambda update-function-code \
	--region "eu-central-1" \
	--function-name "todos" \
    --image-uri "011809624525.dkr.ecr.eu-central-1.amazonaws.com/kbsb-demodash:latest"

update: build tag push lambda
