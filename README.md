# README

A dashboard demo project. Built with React and MUI components in the frontend. And an AWS serverless Python function in the backend.


## Documentation
-----------------------------------------------

Checkout the build and deployment instructions in the [documentation](/docs/README.md).


## Goals
-----------------------------------------------

Use a component framework to build a dashboard with basic layout and styling. Demonstrate the following functionality:
- fetch data from APIs
- send data to an API
- process data with a serverless function
- visualize data with charts, maps, and tables


## Built with
-----------------------------------------------

"Add to-do" widget created with `Python`, `FastAPI`, `AWS Lambda`, `AWS CLI`, `Docker`, and `Airtable`. Uses `Pytest` to verify the endpoint. Furthermore: uses `Nix` shell, `Makefiles`, and `Direnv` for easy development. Uses `Github Actions` for `CI/CD`. Other widgets created with `Recharts`, `ApexCharts`, `Nivo`, `Leaflet.js`, and `React-Hook-Form-MUI`.

> Data sources: [Formula 1](https://observablehq.com/d/889d93794bcfd6da) and [GDP data](https://observablehq.com/d/41d0060afaf5f92e) prepared/processed with ObservableHQ notebooks.


## Retrospective
-----------------------------------------------

- Issue with double CORS
- Docker containers can difficult to debug
- Annoying difference between the local development and production HTTP request format in comparison to the Docker container request format that needs to be in API Gateway format.


## To-do
-----------------------------------------------

- [ ] Add display todos widget
    - Add list_todos endpoint
- [ ] Add tests
- [ ] Add authentication example
    - JWT? OAuth? NextAuth?
