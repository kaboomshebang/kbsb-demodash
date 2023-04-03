from fastapi import FastAPI
from mangum import Mangum
from routes import new_todo, list_todos
from fastapi.middleware.cors import CORSMiddleware

origins = ["*"]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(new_todo.router)
app.include_router(list_todos.router)


@app.get("/")
def root():
    return {
        "body": {"message": "Hello todo!"},
    }


handler = Mangum(app)
