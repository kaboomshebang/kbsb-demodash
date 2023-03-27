FROM public.ecr.aws/lambda/python:3.9

# Copy function code
COPY requirements.txt ${LAMBDA_TASK_ROOT}
COPY app.py ${LAMBDA_TASK_ROOT}

# install dependencies
RUN pip install -r requirements.txt
# you don't need a venv in a container

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "app.lambda_handler" ]
