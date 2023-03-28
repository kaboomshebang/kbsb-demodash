import json

from fastapi import FastAPI, Request
from fastapi.encoders import jsonable_encoder
from mangum import Mangum
from dotenv import load_dotenv

# load environment variables
load_dotenv()

# import routes
from routes.airtable_post import post_at
from routes.airtable_list import list_records

app = FastAPI()


@app.get("/")
def root():
    return {
        "statusCode": 200,
        "body": json.dumps(
            {
                "message": "Hello todo!",
            }
        ),
    }


@app.post("/post_at")
def post_at_handler():
    event = {"body": json.dumps({"description": "test", "label": "Normal"})}
    res = post_at(event)

    return res


# TODO: refactor functions so that the decorator only works on the list_records function
#! OR, move the decorator to the function in the routes folder
@app.get("/post_at")
def list_records_handler():
    list_records()
    return


@app.post("/hello")
async def hello(request: Request):
    body = await request.body()

    return jsonable_encoder({"statusCode": 200, "body": body})


handler = Mangum(app)
