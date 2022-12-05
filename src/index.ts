import express from 'express';
require('dotenv').config();
const ParseServer = require('parse-server').ParseServer;
const ParseDashboard = require('parse-dashboard');

const PARSE_DASHBOARD_USERNAME = process.env.PARSE_DASHBOARD_USERNAME 
const PARSE_DASHBOARD_PASSWORD = process.env.PARSE_DASHBOARD_PASSWORD
const PARSE_SERVER_MASTER_KEY = process.env.PARSE_SERVER_MASTER_KEY;
const PARSE_SERVER_APP_ID = process.env.PARSE_SERVER_APP_ID;
const PARSE_SERVER_APP_NAME = process.env.PARSE_SERVER_APP_NAME;
const PARSE_SERVER_PORT = process.env.PARSE_SERVER_PORT;
const PARSE_SERVER_URL = process.env.PARSE_SERVER_URL;
const PARSE_SERVER_DATABASE_URI = process.env.MONGO_DATABASE_URI;
const PARSE_SERVER_CLOUD = 'src/cloud/main.ts';

if (!PARSE_SERVER_DATABASE_URI) throw 'DB URI NOT DEFINED'

const api = new ParseServer({
  databaseURI: PARSE_SERVER_DATABASE_URI,
  cloud: PARSE_SERVER_CLOUD,
  appId: PARSE_SERVER_APP_ID,
  masterKey: PARSE_SERVER_MASTER_KEY,
  serverURL: PARSE_SERVER_URL,
});
const dashboard = new ParseDashboard({
  apps: [
    {
      serverURL: PARSE_SERVER_URL,
      appId: PARSE_SERVER_APP_ID,
      masterKey: PARSE_SERVER_MASTER_KEY,
      appName: PARSE_SERVER_APP_NAME,
    },
  ],
  users: [
    {
      user: PARSE_DASHBOARD_USERNAME,
      pass: PARSE_DASHBOARD_PASSWORD
    },
  ],
});

const app = express();

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/html' }));

console.log(PARSE_SERVER_URL);

app.get('/', ()=>{
  return 'REST API'
})
app.use('/parse', api);
app.use('/dashboard', dashboard);

app.listen(PARSE_SERVER_PORT, () => {
  console.log(`Example app listening at http://${PARSE_SERVER_URL}:${PARSE_SERVER_PORT}`);
});
