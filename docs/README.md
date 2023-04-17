# Documentation

How to reproduce this project.


## Prerequisites
-----------------------------------------------

- Python 3.9
- Node 18 LTS with `pnpm`
- AWS CLI v2

> Optional: use the Nix package manager with `direnv` for an automated dev. environment.


## Project settings
-----------------------------------------------

- Set the following environment variables
    - set a value for the CORS policy origin
    - `.env`
    - set credentials for Airtable
    - Airtable schema
        - column id (autoID)
        - column text (single line)
        - column checkbox


## Local development
-----------------------------------------------

- Which Makefile commands???



## Deploy to production
-----------------------------------------------

Deploy to AWS

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
