import os
from dotenv import load_dotenv

# load environment variables
load_dotenv()

api_key = os.getenv("AIRTABLE_API_KEY")
base_id = os.getenv("AIRTABLE_BASE_ID")
table_name = os.getenv("AIRTABLE_TABLE_NAME")
cors_domain = os.getenv("CORS_DOMAIN")
