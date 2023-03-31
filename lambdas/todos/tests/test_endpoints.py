import os
import requests
import datetime

# run test with:
# `EXEC_ENV=PROD && pytest -k test_endpoints`
# run `pytest -s` to incude stdout

# ENV
exec_env = os.getenv("EXEC_ENV")
url = "http://100.111.214.8:8000"
if exec_env == "DOCKER":
    url = "http://localhost:9000/2015-03-31/functions/function/invocations"
elif exec_env == "PROD":
    url = "https://jchv4b5lpu5gea3lkowr5g2bei0tpnsl.lambda-url.eu-central-1.on.aws"

# TIME
now = datetime.datetime.now()
time = now.strftime("%H_%M_%S")

# DATA is compatible with the Lambda Emulator
def data(METHOD, ENDPOINT, BODY):
    return {
        "version": "2.0",
        "requestContext": {
            "http": {
                "method": f"{METHOD}",
                "path": f"{ENDPOINT}",
                "protocol": "HTTP/1.1",
                "sourceIp": "192.0.2.1",
            }
        },
        "body": BODY,
    }


def test_new_todo():
    endpoint = "/new_todo"
    body = {"description": f"TEST_{time}", "label": "Normal", "done": True}

    res = requests.post(f"{url + endpoint}", json=data("POST", endpoint, body))
    print("RESPONSE:", res.json())
    assert res.status_code == 200
    assert res.json()["body"]["message"] == "todo created"
