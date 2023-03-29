"""
A function that posts todos from the demodash frontend to Airtable
"""

import json
from fastapi import APIRouter, Request
from fastapi.encoders import jsonable_encoder

from pyairtable import Table
from lib.env import api_key, base_id, table_name

router = APIRouter()


@router.get("/new_todo")
async def new_todo(request: Request):
    body = await request.body()
    event = {"body": json.dumps({"description": "test33", "label": "Normal"})}
    body = json.loads(event["body"])

    table = Table(api_key, base_id, table_name)

    # add todo
    res = table.create(body)

    return {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps({"message": "Todo created", "airtable-response": res}),
    }
