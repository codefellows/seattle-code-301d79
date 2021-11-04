'use strict';

require('dotenv').config()
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const starshipObj = require('./starships.js');
const handleGetPeople = require('./people.js');
const { Planet, handleGetPlanets } = require('./planets.js');
// can't do this yet!
// import handleGetPeople from './people.js';

const app = express();

app.use(cors());

app.get('/hello', (req, res) => res.status(200).send('hello'));
app.get('/planets', handleGetPlanets)
app.get('/people', handleGetPeople)
app.get('/starships', starshipObj.handleGetStarships)


// notes to put in our documentation
// route /people it gives you an array of people with name, eye_color, hair_color properties


const PORT = process.env.PORT

app.listen(PORT, () => console.log('Listening on port ' + PORT));