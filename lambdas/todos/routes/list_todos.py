from fastapi import APIRouter

router = APIRouter()


@router.get("/list_records")
def list_todos():
    return {"statusCode": 200, "msg": "test list todos"}
