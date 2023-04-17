# README

A dashboard demo project. Built with React and MUI components in the frontend. And an AWS serverless Python function in the backend.

## Goals

Use a component framework to build a dashboard with basic layout and styling. Demonstrate the following functionality:
- fetch data from APIs
- send data to an API
- process data with a serverless function
- visualize data with charts, maps, and tables


## Built with

"Add to-do" widget created with `Python`/`FastAPI`, `AWS Lambda`, `AWS CLI`, `Docker`, and `Airtable`. Uses `Pytest` to verify the endpoint. Furthermore: uses `Nix` shell, `Makefiles`, and `Direnv` for easy development. Uses `Github Actions` for `CI/CD`. Other widgets created with `Recharts`, `ApexCharts`, `Nivo`, `Leaflet.js`, and `React-Hook-Form-MUI`.

> Data sources: [Formula 1](https://observablehq.com/d/889d93794bcfd6da) and [GDP data](https://observablehq.com/d/41d0060afaf5f92e) prepared/processed with ObservableHQ notebooks.


## Documentation

### Prerequisites:
- Python 3.9
- Node 18 LTS with `pnpm`
- AWS CLI v2

> Optional: use the Nix package manager with `direnv` for an automated dev. environment.

### Project settings

- Set the following environment variables
    - set a value for the CORS policy origin
    - `.env`
    - set credentials for Airtable

### AWS settings

- optional: in `AWS Organizations` create a new AWS account
- create an IAM role with the following policies
    - LAMBDA,etc,etc
    - ECR ?

### Create a private AWS ECR container repository

- go to AWS ECR, go to repositories
    - create a private repository
    - `XXXXXXXXXXX.dkr.ecr.eu-central-1.amazonaws.com/XXXXXXXXXXXX`
    - [ ] what is the CLI command to create a private repo?

- run the following Make command to deploy the backend
    - Make update

### Deploy the frontend to AWS S3

- deploy
