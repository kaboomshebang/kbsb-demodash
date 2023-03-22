# A Lambda that posts todos from the frontend to Airtable
import os
import json
import boto3
from pyairtable import Table
from dotenv import load_dotenv

load_dotenv()


def lambda_handler(event, context=None):
    body = json.loads(event["body"])

    api_key = os.getenv("AIRTABLE_API_KEY")
    base_id = os.getenv("AIRTABLE_BASE_ID")
    table_name = os.getenv("AIRTABLE_TABLE_NAME")
    table = Table(api_key, base_id, table_name)

    # add todo
    res = table.create(body)

    return {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps({"message": "Todo created", "airtable-response": res}),
    }


event = {"body": json.dumps({"description": "test", "label": "Normal"})}
lambda_handler(event)
