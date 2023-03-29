import json
from fastapi import FastAPI, Request
from fastapi.encoders import jsonable_encoder
from mangum import Mangum
from routes import new_todo, list_todos

app = FastAPI()
app.include_router(new_todo.router)
app.include_router(list_todos.router)


@app.get("/")
def root():
    return {
        "statusCode": 200,
        "body": json.dumps({"message": "Hello todo!"}),
    }


@app.post("/hello")
async def hello(request: Request):
    body = await request.body()

    return jsonable_encoder({"statusCode": 200, "body": body})


handler = Mangum(app)
