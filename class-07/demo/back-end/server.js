'use strict';

// install via term cors, dotenv, express
// then require/import them to the server file
require('dotenv').config();
const express = require('express');
// import express from 'express'
const cors = require('cors');
const shoppingList = require('./myShoppingList.json');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001

// when setting up routes you use a method on app
// that method takes two things 'a route' and 'a callback handler function'
// these callback handler functions always need the arguments/params request, response
app.get('/hello', (request, response) => { response.send('Hello, it works!') })
app.get('/shoppingList', handleGetShoppingList);
app.get('/*', (req, res) => res.status(403).send('not found'))


function handleGetShoppingList(req, res) {
  console.log(req.query.name)
  console.log('The shopping list route was hit!!');
  res.status(200).send(shoppingList)
}


app.listen(PORT, () => console.log(`I am a server that is listening on port:${PORT}`));