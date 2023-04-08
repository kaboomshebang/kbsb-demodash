import os
import json
import requests
import datetime

# ENV
URL = os.getenv("TEST_URL")
DOCKER = os.getenv("TEST_DOCKER")

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
    body = {"description": f"TEST_{time}", "label": "normal", "done": True}

    if DOCKER:
        # use a http request that is compatible with the Lambda Emulator (RIE)
        res = requests.get(f"{URL}", json=data("POST", endpoint, json.dumps(body)))
    else:
        res = requests.post(f"{URL + endpoint}", json=body)

    assert res.status_code == 200
    print("RESPONSE:", res.json())

    if not DOCKER:
        # also verify the Airtable response
        assert res.json()["body"]["message"] == "todo created"
        print("MSG:", res.json()["body"]["message"])
