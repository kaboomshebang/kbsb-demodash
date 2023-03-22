# Use this code snippet in your app.
# If you need more information about configurations
# or implementing the sample code, visit the AWS docs:
# https://aws.amazon.com/developer/language/python/

import boto3
from botocore.exceptions import ClientError


def get_secret():

    secret_name = "airtable_credentials"
    region_name = "eu-central-1"

    # Create a Secrets Manager client
    session = boto3.session.Session()
    client = session.client(service_name="secretsmanager", region_name=region_name)

    try:
        get_secret_value_response = client.get_secret_value(SecretId=secret_name)
    except ClientError as e:
        # For a list of exceptions thrown, see
        # https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
        raise e

    # Decrypts secret using the associated KMS key.
    secret = get_secret_value_response["SecretString"]

    # Your code goes here.


import boto3
import json


def lambda_handler(event, context):
    # Create a Secrets Manager client
    client = boto3.client("secretsmanager")

    # Retrieve the secret value
    secret_name = "my-secret-name"
    response = client.get_secret_value(SecretId=secret_name)

    # Parse the secret value
    secret_value = json.loads(response["SecretString"])

    # Use the secret value in your code
    db_username = secret_value["username"]
    db_password = secret_value["password"]
