# README

A [dashboard demo](https://demodash.kbsb.app) project. Built with React and MUI components in the frontend. And an AWS serverless Python function in the backend.



Documentation
-----------------------------------------------

> ⚠️ Checkout the complete build and deployment instructions in the [documentation](/docs/README.md).



Goals
-----------------------------------------------

Use a component framework to build a dashboard with basic layout and styling. Demonstrate the following functionality:
- fetch data from APIs, send data to an API
- process the data with a serverless function
- visualize data with charts, maps, and tables
- work with AWS CLI, and create CI/CD and automated deployment



Built with
-----------------------------------------------

- "Add to-do" widget created with:
    - `Python`, `Pytest`, `FastAPI`, `AWS Lambda`, `AWS CLI`, `Docker`, and `Airtable`
- Other React/MUI widgets created with:
    - `Recharts`, `ApexCharts`, `Nivo`, `Leaflet.js`, and `React-Hook-Form-MUI`
- `Github Actions` for `CI/CD`
- S3 object storage connected to Cloudflare
- Uses `Nix` shell, `Makefiles`, and `Direnv` for easy development

> Data sources: [Formula 1](https://observablehq.com/d/889d93794bcfd6da) and [GDP data](https://observablehq.com/d/41d0060afaf5f92e) prepared/processed with ObservableHQ notebooks.



Retrospective
-----------------------------------------------

- Creating a automated deployment from scratch takes a lot of time
    - Lots of variable configuration and loads of AWS CLI commands
    - Finding the right IAM-policies/actions can be cumbersome
        - many errors like: no identity-based policy allow the "service:GetSomeKindOff" action
    - Issue/Bug with double CORS config (Lambda CORS config + FastAPI CORS)
    - Functions/containers can be a bit difficult to debug
        - Local dev server is a different config in comparison to deployment
        - Difference between the local development and production HTTP request format
            - for example: the Docker RIE container HTTP request must be according to API Gateway spec.

> A framework like Serverless or AWS SAM CLI could make all of the above easier

- Head scratcher 🤯: hours of time wasted on a dumb Github Actions config issue.
    - config used an incorrect URL (missed a parameter in the URL)
        - in hindsight the error messages actually made sense
            - debugging in the wrong place `===` lots of trial and **error**
            - while debugging accidentally used the wrong context in Github Actions
                - `var` instead of `vars`
        - [ ] note to self: next time follow a good debug strategy



To-do
-----------------------------------------------

- [ ] Add display todos widget
    - Add list_todos endpoint
- [ ] Add more tests
- [ ] Add authentication example
    - JWT? OAuth? NextAuth?
