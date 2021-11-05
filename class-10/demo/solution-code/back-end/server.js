'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

const PORT = process.env.PORT

const cache = {}
/// us this idea A LOT in DSA questions

app.get('/recipes', getRecipes);

function getRecipes(request, response) {
  const ingredient = request.query.ingredient;


  if (cache[ingredient]) {
      // if it is in the cache - retrieve and send
      console.log('it was in the cache!' + ingredient);
      response.status(200).send(cache[ingredient]);
      return;
  }
  const url = `https://api.edamam.com/search?q=${ingredient}&app_id=${process.env.FOOD_APP_ID}&app_key=${process.env.FOOD_APP_KEY}`;


  // if someone makes a request I will check the cache for the ingredient they looked for
  // if it is in the cache - retrieve and send
  // if it is not in the cache??? we make the api reqest
  // use the data to make a 'recipeArr' then 
  // store in the cache the key: ingredient val: recipeArr
  // send recipeArr

  // our response is how we handle requests that come in from the client WE ARE THE SERVER
  // axios NOW WE are the client
  axios
    .get(url)
    .then(result => {
      const recipeArr = result.data.hits.map(recipe => new Recipe(recipe.recipe));
      console.log('it was NOT in the cache!' + ingredient);
      cache[ingredient] = recipeArr;
      response.status(200).send(recipeArr);
    })
    .catch(err => {
      console.error('error', err);
      response.status(500).send('error', err);
    })
}

class Recipe {
  constructor(recipe) {
    this.uri = recipe.uri;
    this.label = recipe.label;
    this.image_url = recipe.image;
    this.ingredients = recipe.ingredientLines;
    this.totalTime = recipe.totalTime;
  }
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
