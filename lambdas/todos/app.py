from fastapi import FastAPI
from mangum import Mangum
from routes import new_todo, list_todos

app = FastAPI()
app.include_router(new_todo.router)
app.include_router(list_todos.router)


@app.get("/")
def root():
    return {
        "body": {"message": "Hello todo!"},
    }


handler = Mangum(app)
