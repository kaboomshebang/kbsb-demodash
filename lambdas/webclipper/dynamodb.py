import boto3


def lambda_handler(event, context):
    # Initialize DynamoDB client
    dynamodb = boto3.client("dynamodb")

    # Define table name
    table_name = "my-table"

    # Define item to be inserted
    item = {
        "pk": {"S": "my-partition-key"},
        "sk": {"S": "my-sort-key"},
        "attribute1": {"S": "value1"},
        "attribute2": {"N": "123"},
    }

    # Write item to DynamoDB table
    response = dynamodb.put_item(TableName=table_name, Item=item)

    # Return response
    return {"statusCode": 200, "body": response}
