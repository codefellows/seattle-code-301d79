'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
// import our library that we are going to use to interact (make queries and stuff) with our mongo db
const mongoose = require('mongoose');
const Cat = require('./models/catModel');
const { response } = require('express');

const app = express();
app.use(cors());
app.use(express.json())

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
app.post('/cats', handlePostCats);
app.delete('/cats/:id', handleDeleteCats);

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

async function handlePostCats(req, res) {
  /// client will send over a newBook that matches our model
  // expect it to be put in the db
  // should come over as req.body
  try {
    console.log(req.body);
    let newCat = await Cat.create(req.body)
    res.status(201).send(newCat);
  } catch (e) {
    res.status(500).send('sorry, your cat wasn\'t added');
  }
}

async function handleDeleteCats(req, res) {
  // get some id in params to let us know what cat to delete
  // in your books project you have to confirm that both the user and the id belong to the same book
  const id = req.params.id;
  try{
    const deletedCat = await Cat.findByIdAndDelete(id);
    if (deletedCat) {
      res.status(204).send('cat deleted')
    } else {
      res.status(404).send('no cat there')
    }
  
  } catch (e) {
    res.status(500).send('server error')
  }
}

app.listen(3001, () => console.log('I am listening'));