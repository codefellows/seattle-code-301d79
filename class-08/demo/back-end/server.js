'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

// middleware
app.use(cors());

const PORT = process.env.PORT || 3001


app.get('/', (req, res) => res.send('hello world'));
app.get('/photos', handleGetPhotos);

async function handleGetPhotos(req, res) {
  // setting up a route for client to make a request to
  // this route is going to expect some query info : keyword
  // https://api.unsplash.com/?client_id=pubkey
  // /search/photos
  // https://api.unsplash.com/search/photos?client_id=pubKey&query={keyword}
  // get back results )resultsFromTheAPI.data.results map through and make Photos to send to the client
  const { keyWord} = req.query;

  console.log(keyWord);
  const url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_PUBLIC_KEY}&query=${keyWord}`

  try {
    const resultsFromTheAPI = await axios.get(url);
    const clientPhotos = resultsFromTheAPI.data.results.map(photo => new Photo(photo));
    res.status(200).send(clientPhotos);

  } catch (e) {
    res.status(500).send('server error')
  }
}


// need a photo class that will have description, alt_description, urls.thumb, id
class Photo {
  constructor(obj) {
    this.description = obj.description;
    this.alt_description = obj.alt_description;
    this.id = obj.id;
    this.image_url = obj.urls.thumb;
  }
}

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))