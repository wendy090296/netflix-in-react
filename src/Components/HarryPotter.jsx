import { Component } from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
// import { Spinner } from "react-bootstrap";

class HarryPotter extends Component {
  state = {
    films: [],
    isLoading: true, // setto lo stato iniziale dell'array che mi ritorna indietro dalla fetch
  };

  fetchFilms = () => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=b84970d1&s=Harry Potter")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("ERRORE");
        }
      })
      .then((arrayOfHarryPotter) => {
        console.log("I film della saga", arrayOfHarryPotter.Search);
        this.setState({
          films: arrayOfHarryPotter.Search,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log("err");
        this.setState({
          isLoading: false,
        });
      });
  };

  componentDidMount() {
    this.fetchFilms();
  }

  render() {
    // {this.state.films.length > 0 ? (
    //   {this.state.isLoading && (
    //     <Spinner animation="border" variant="white"></Spinner>
    //   )}
    // )}
    // {this.state.films.length === 0 && !this.state.isLoading ? (
    //   <Alert variant="warning">Errore nel caricamento</Alert>
    return (
      <Container fluid className="bg-black my-2">
        <Row className="gy-3">
          <h5 className="text-white mb-0">Harry Potter</h5>

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

export default HarryPotter;
