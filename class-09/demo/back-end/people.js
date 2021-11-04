'use strict';
const axios = require('axios');


async function handleGetPeople(req, res) {
  try {
    const result = await axios.get(`https://swapi.dev/api/people`)
    let peopleData = result.data.results.map(person => new People(person));
    res.status(200).send(peopleData);
  } catch (e) {
    res.status(500).send('server error')
  }
}


class People {
  constructor(obj) {
    this.name = obj.name;
    this.eye_color = obj.eye_color;
    this.hair_color = obj.hair_color === 'n/a' || obj.hair_color === 'none' ? 'nowhair' : obj.hair_color;
  }
}

module.exports = handleGetPeople