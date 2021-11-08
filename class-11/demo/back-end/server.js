'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
// import our library that we are going to use to interact (make queries and stuff) with our mongo db
const mongoose = require('mongoose');
const Cat = require('./models/catModel');

const app = express();
app.use(cors());

// connect to the db
// quick start
// mongoose.connect(process.env.DB_URL);

// other method that sends us a message
// more complicated but gives you confirmation
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected')
});

// set up a model to represent the shape of the data we will be storing


app.get('/', (req, res) => res.send('hello'));
app.get('/cats', handleGetCats);

async function handleGetCats(req, res) {
  let queryObj = {};
  // looks for the cats in the db and sends the cats
  if (req.query.location) {
    queryObj = {location: req.query.location}
  }
  
  try {
    let catsFromDB = await Cat.find(queryObj);
    if (catsFromDB) {
    // if the cat cat reqest/query was successful send the cats
    res.status(200).send(catsFromDB);
    } else {
      res.status(404).send('no cats for you');
    }

  } catch (e) {
    console.error(e);
    res.status(500).send('server error')
  }
}

app.listen(3001, () => console.log('I am listening'));