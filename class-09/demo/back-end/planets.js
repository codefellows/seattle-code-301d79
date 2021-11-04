'use strict';
const axios = require('axios');


async function handleGetPlanets(req, res) {
  try {
    const result = await axios.get(`https://swapi.dev/api/planets`)
    let planetData = result.data.results.map(planet => new Planet(planet));
    res.status(200).send(planetData);
  } catch (e) {
    res.status(500).send('server error')
  }
}


class Planet {
  constructor(obj) {
    this.name = obj.name;
    this.terrain = obj.terrain;
  }
}

module.exports = { Planet, handleGetPlanets }