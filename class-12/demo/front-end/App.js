import React from 'react';
import axios from 'axios';
import Cats from './Cats';
import CreateCat from './CreateCat.js'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const SERVER = `http://localhost:3001`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
    }
  }

  async getCats(location = null) {
    let apiUrl = `${SERVER}/cats`;

    if (location) {
      apiUrl += `?location=${location}`;
    }

    try {
      const response = await axios.get(apiUrl);
      this.setState({ cats: response.data });

    } catch (error) {
      console.log(error);
    }
  }

  // add cats
  postCats = async (catObj) => {
    const url = `${SERVER}/cats`
    let res = await axios.post(url, catObj);
    // res.data is the new cat to be added to our state for cat array
    this.setState({ cats: [...this.state.cats, res.data]});
  }

  // delete cats
  deleteCats = async (id) => {
    const url = `${SERVER}/cats/${id}`;
    await axios.delete(url);
    let filteredCats = this.state.cats.filter(cat => cat._id !== id);
    this.setState({ cats: filteredCats });
  }

  handleLocationSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    console.log({ location });
    this.getCats(location);
  }

  componentDidMount() {
    this.getCats();
  }

  render() {
    return (
      <Router>
        <Navbar variant='dark' bg="dark">
          <Container>
            <Navbar.Brand href="#home">World of Cats</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
          </Container>
        </Navbar>
        <Container style={{marginTop: "10px"}}>
          <Switch>
            <Route exact path="/">

              <div>
                <Cats cats={this.state.cats} deleteCats={this.deleteCats} />
                <h2>Filter by location</h2>
                <form onSubmit={this.handleLocationSubmit}>
                  <input name="location" />
                  <button>ok</button>
                </form>
              </div>

            </Route>
            <Route path="/about">
              <h1>About Page Here</h1>
            </Route>
            {/* new */}
            <Route>
              <CreateCat postCats={this.postCats} onCreate={this.handleCatCreate} />
            </Route>
          </Switch>
        </Container>
      </Router>
    )
  }
}

export default App;

