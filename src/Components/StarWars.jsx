import { Component } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
class StarWars extends Component {
  state = {
    films: [],
  };

  fetchFilms2 = () => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=e57367c2&s=Star Wars")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("ERRORE");
        }
      })
      .then((arrayOfStarWars) => {
        console.log("I film della saga", arrayOfStarWars.Search);
        this.setState({
          films: arrayOfStarWars.Search,
        });
      })
      .catch((err) => {
        console.log("err");
      });
  };

  componentDidMount() {
    this.fetchFilms2();
  }

  render() {
    return (
      <Container fluid className="bg-black my-3">
        <Row className="gy-3 ">
          <h3 className="text-white">Star Wars</h3>
          {this.state.films.slice(0, 6).map((film) => {
            console.log("Film:", film);
            return (
              <Col xs={12} md={4} lg={2} key={film.imdbID}>
                <div>
                  <img
                    src={film.Poster}
                    alt="poster movie"
                    className="w-100 h-100"
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default StarWars;
