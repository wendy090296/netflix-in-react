import { Component } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
class Twilight extends Component {
  state = {
    films: [],
  };

  fetchFilms3 = () => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=e57367c2&s=Twilight")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("ERRORE");
        }
      })
      .then((arrayOfTwilight) => {
        console.log("I film della saga", arrayOfTwilight.Search);
        this.setState({
          films: arrayOfTwilight.Search,
        });
      })
      .catch((err) => {
        console.log("err");
      });
  };

  componentDidMount() {
    this.fetchFilms3();
  }

  render() {
    return (
      <Container fluid className="bg-black ">
        <Row className="gy-3 ">
          <h3 className="text-white">Twilight</h3>
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

export default Twilight;
