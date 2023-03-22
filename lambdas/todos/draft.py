import boto3
import requests
import json


def lambda_handler(event, context):
    # Get the IP address of the client making the request
    client_ip = event["requestContext"]["identity"]["sourceIp"]

    # Create a connection to the IAM service
    iam = boto3.client("iam")

    # Create a rate-limiting policy
    policy_name = "RateLimitPolicy"
    policy_document = {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": "execute-api:Invoke",
                "Resource": "*",
                "Condition": {
                    "IpAddress": {
                        "aws:SourceIp": [client_ip],
                        "aws:SourceIp": ["192.0.2.0/24"],
                    },
                    "Bool": {"aws:SecureTransport": "false"},
                },
            }
        ],
    }
    policy_arn = iam.create_policy(
        PolicyName=policy_name, PolicyDocument=json.dumps(policy_document)
    )["Policy"]["Arn"]

    # Attach the rate-limiting policy to the Lambda function's IAM role
    role_name = context.invoked_function_arn.split(":")[6]
    role_policy_name = f"{role_name}-policy"
    iam.put_role_policy(
        RoleName=role_name,
        PolicyName=role_policy_name,
        PolicyDocument=json.dumps(
            {
                "Version": "2012-10-17",
                "Statement": [
                    {
                        "Effect": "Allow",
                        "Action": "execute-api:Invoke",
                        "Resource": "*",
                        "Condition": {
                            "ArnEquals": {
                                "aws:SourceArn": f"arn:aws:execute-api:{context.invoked_function_arn.split(':')[3]}:{context.invoked_function_arn.split(':')[4]}:{event['requestContext']['stage']}:*/*/*"
                            }
                        },
                    },
                    {"Effect": "Allow", "Action": "iam:PassRole", "Resource": role_arn},
                ],
            }
        ),
    )

    # Get the body object from the HTTP request
    body = event["body"]

    # Set up connection to Airtable API
    api_key = "YOUR_AIRTABLE_API_KEY"
    base_id = "YOUR_AIRTABLE_BASE_ID"
    table_name = "YOUR_AIRTABLE_TABLE_NAME"
    headers = {"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"}
    url = f"https://api.airtable.com/v0/{base_id}/{table_name}"

    # Send the body object to Airtable
    response = requests.post(url, headers=headers, json=body)

    # Log the response from Airtable
    print(response.json())

    # Return a response to the HTTP request
    return {"statusCode": 200, "body": "Data sent to Airtable"}
