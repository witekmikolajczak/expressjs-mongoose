import Parse = require("parse/node");
require('dotenv').config();
const args = process.argv;

Parse.initialize('food_managment', undefined, args[2]);
Parse.serverURL = 'http://localhost:1337/parse';

