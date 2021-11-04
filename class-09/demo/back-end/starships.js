'use strict';
const axios = require('axios');

async function handleGetStarships(req, res) {
  try {
    const result = await axios.get(`https://swapi.dev/api/starships`)
    let starshipData = result.data.results.map(ship => new Ship(ship));
    res.status(200).send(starshipData);
  } catch (e) {
    res.status(500).send('server error')
  }
}

class Ship {
  constructor(obj) {
    this.name = obj.name;
    this.model = obj.model;
  }
}

// module.exports = handleGetStarships;

module.exports = { Ship: Ship, handleGetStarships: handleGetStarships }