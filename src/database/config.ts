import Parse = require("parse/node");
require('dotenv').config();
const args = process.argv;

Parse.initialize('food_management', undefined, args[2]);
Parse.serverURL = 'http://localhost:4040/parse';
