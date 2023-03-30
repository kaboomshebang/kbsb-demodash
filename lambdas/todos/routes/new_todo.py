"""
A function that posts todos from the demodash frontend to Airtable
"""

import json
from fastapi import APIRouter, Request
from fastapi.encoders import jsonable_encoder

from pyairtable import Table
from lib.env import api_key, base_id, table_name

router = APIRouter()


@router.post("/new_todo")
async def new_todo(request: Request):
    req = await request.body()
    body = json.loads(req)["body"]

    try:
        table = Table(api_key, base_id, table_name)
        msg = "todo created"
        res = table.create(body)
    except Exception as e:
        print("Airtable error:", e)
        msg = "something went wrong, not your fault"
        res = e.response.status_code

    return jsonable_encoder(
        {
            "body": {"message": msg, "airtable-response": res},
        }
    )
