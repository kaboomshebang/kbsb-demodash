# app.py
# app function
api:
	uvicorn --host 0.0.0.0 app:app --reload

auth:
	aws ecr get-login-password --region eu-central-1 --profile admin | docker login --username AWS --password-stdin 011809624525.dkr.ecr.eu-central-1.amazonaws.com

build:
	docker build -t kbsb-demodash-todos .

tag:
	docker tag kbsb-demodash-todos 011809624525.dkr.ecr.eu-central-1.amazonaws.com/kbsb-demodash

push:
	docker push 011809624525.dkr.ecr.eu-central-1.amazonaws.com/kbsb-demodash

update:
	aws lambda update-function-code \
	--region "eu-central-1" \
	--function-name "todos" \
    --image-uri "011809624525.dkr.ecr.eu-central-1.amazonaws.com/kbsb-demodash:latest" \
	--profile admin
