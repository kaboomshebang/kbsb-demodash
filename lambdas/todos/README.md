# Readme

Post todos to Airtable.

Requirements:
- Python v3.9

> 📌 Make sure to set the AWS_PROFILE environment variable if you want to use the Makefile Docker targets!

```sh
pip install pytest
pip freeze > requirements.txt
# install dependencies from requirements
pip freeze -r requirements.txt

# update requirements
pip freeze
# run pytest tests
pytest
```

```sh
# setup Python environment
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## FastAPI documentation page

```
http://100.111.214.8:8000/docs
https://jchv4b5lpu5gea3lkowr5g2bei0tpnsl.lambda-url.eu-central-1.on.aws/docs
```

> Set ENV VAR `LOCAL=1` in Lambda environment to test the production endpoint from a local dev. frontend.
