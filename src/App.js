import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import CardColumns from "react-bootstrap/CardColumns";
import Columns from "react-columns";
import Form from "react-bootstrap/Form";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';
import donate from './donate';
import {Route, Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Badge from 'react-bootstrap/Badge'

function App() {
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);
  const [USA, setCases] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");
  useEffect(() => {
    axios
     .all([
       axios.get("https://corona.lmao.ninja/all"),
       axios.get("https://corona.lmao.ninja/countries"),
       axios.get("https://corona.lmao.ninja/countries/USA")
     ])
     .then(responseArr => {
       setLatest(responseArr[0].data);
       setResults(responseArr[1].data)
       setCases(responseArr[2].data)
     })
     .catch(err => {
       console.log(err)
     });
  }, []);

  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();

  const filterCountries = results.filter(item => {
    return searchCountries !== "" ? item.country.includes(searchCountries) : item;
  });

  const countries = filterCountries.map((data, i) => {
    return (
      <Card key={i} bg="light" text="dark" className="text-center" style={{margin: "10px"}}>
        <Card.Img variant="top" src={data.countryInfo.flag} />
        <Card.Body>
          <Card.Title>{data.country}</Card.Title>
          <Card.Text>Cases {data.cases}</Card.Text>
          <Card.Text>Deaths {data.deaths}</Card.Text>
          <Card.Text>Recovered {data.recovered}</Card.Text>
          <Card.Text>Today's Cases {data.todayCases}</Card.Text>
          <Card.Text>Today's Deaths {data.todayDeaths}</Card.Text>
          <Card.Text>Active {data.active}</Card.Text>
          <Card.Text>Critical {data.critical}</Card.Text>
        </Card.Body>
      </Card>
    );
  });



  var queries = [{
    columns: 2,
    query: 'min-width: 500px'
  }, {
    columns: 3,
    query: 'min-width: 1000px'

  }];
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="./">Covid 19 Tracker</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#donate">Donate</Nav.Link>
      <Nav.Link href="https://github.com/sell/covid-Tracker">Github <Badge variant="success">Source Code</Badge> </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      <div className="body">
      <Alert className="container" variant="danger">
        United States Currently has the most cases with {USA.cases}
      </Alert>
      <Container>
      <CardDeck>
        <Card className="text-center" bg="secondary" text="white" style={{margin: "10px"}}>
          <Card.Body>
            <Card.Title>Total Cases</Card.Title>
              <Card.Text>
                {latest.cases}
              </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card className="text-center" bg="danger" text={"white"} style={{margin: "10px"}}>
          <Card.Body>
            <Card.Title>Total Deaths</Card.Title>
              <Card.Text>
                {latest.deaths}
              </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card className="text-center" bg="success" text={"white"} style={{margin: "10px"}}>
          <Card.Body>
            <Card.Title>Total Recovered</Card.Title>
              <Card.Text>
                {latest.recovered}
              </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <Form>
        <Form.Group controlId="formGroupSearch">
          <Form.Label>Seach a Country (capitalize first letter, working on a fix)</Form.Label>
          <Form.Control type="text" className="search" placeholder="Search a Country" onChange={e => setSearchCountries(e.target.value)} />
        </Form.Group>
      </Form>
      <Columns queries={queries}>
        {countries}
      </Columns>
      <div id="#donate">
      <Route exact path="/donate" component={donate} />
      </div>
      </Container>
      </div>
    </div>
  );
}

export default App;
