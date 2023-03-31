"""
A function that posts todos from the demodash frontend to Airtable
"""

import json
from fastapi import APIRouter, Request
from fastapi.encoders import jsonable_encoder
from enum import Enum
from typing import Optional
from pydantic import BaseModel, constr, validator

from pyairtable import Table
from lib.env import api_key, base_id, table_name

router = APIRouter()


class Label(Enum):
    PRIO = "Prio"
    NORM = "Normal"
    LONG = "Longterm"


class Todo(BaseModel):
    description: constr(min_length=1, max_length=255)  # constrained string
    label: Label
    done: Optional[bool]

    @validator("description")
    def validate_description(cls, value):
        if len(value) < 1:
            raise ValueError("No description")
        return value


@router.post("/new_todo")
async def new_todo(request: Request):
    req = await request.body()

    # verify that the request is valid JSON
    try:
        body = json.loads(req)["body"]
    except Exception as e:
        return jsonable_encoder({"request error": e.msg})

    todo = Todo(**body)

    # send data to Airtable
    try:
        table = Table(api_key, base_id, table_name)
        msg = "todo created"
        res = table.create(jsonable_encoder(todo))
    except Exception as e:
        print("Airtable error:", e)
        msg = "something went wrong, not your fault"
        res = e.response.status_code

    if todo:
        return {
            "body": {"message": msg, "airtable-response": res},
        }
