import express from 'express';
require('dotenv').config();
const ParseServer = require('parse-server').ParseServer;
const path = require('path');
console.log(__dirname);

const MASTER_KEY = process.env.MASTER_KEY || 'masterKey';
const CLOUD_CODE_MAIN = 'src/cloud/main.ts';
const APP_ID = process.env.APP_ID || 'myAppId';
const parse_port = process.env.PARSE_PORT || 1337; //  process.env.SERVER_URL ||
const SERVER_URL = `http://localhost:${parse_port}/parse`; // Don't forget to change to https if needed
let DATABASE_URI =
  process.env.DATABASE_URI || process.env.MONGODB_URI;

if (!DATABASE_URI) {
  DATABASE_URI = 'mongodb://localhost:27017/dev';
  console.log(
    `DATABASE_URI not specified, falling back to ${DATABASE_URI}`
  );
}

const api = new ParseServer({
  databaseURI: DATABASE_URI,
  cloud: CLOUD_CODE_MAIN,
  appId: APP_ID,
  masterKey: MASTER_KEY,
  serverURL: SERVER_URL,
});
const app = express();

const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/html' }));

app.get('/', async (req, res) => {
  res.json({
    message: 'Please visit /countries to view all the countries',
  });
});

app.use('/parse', api);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.listen(parse_port, function () {
  console.log(
    'parse-server-example running on port  1337.',
    SERVER_URL
  );
});
