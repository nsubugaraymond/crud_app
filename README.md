# Getting Started with Create React App

`npm install`

install json-server

`npm install -g json-server`

## Setup

Fix error by setting the port on which the json-server is running
`npx json-server --watch db.json --port 3000`

add the port number in src/features/api/apiSlice.js line 5, 
`baseUrl: 'http://localhost:3000' `

## Run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
