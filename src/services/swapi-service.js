export default class SwapiService {
  _baseUrl = "https://swapi.dev/api";

  async getResource(url) {
    const res = await fetch(`${this._baseUrl}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  }

  async getAllPlanet() {
    const res = await this.getResource(`/planets/`);
    return res;
  }

  getPlanets(id) {
    return this.getResource(`/planets/${id}/`);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res;
  }

  getStarships(id) {
    return this.getResource(`/starships/${id}/`);
  }
}

/* const swapi = new SwapiService();
const allPeople = swapi.getAllPeople().then((people) => {
  people.forEach((p) => {
    return p.name;
  });
}); */

/* const person = swapi.getPerson(2).then((person) => {
  console.log(person);
  return person;
});
console.log(person); */
