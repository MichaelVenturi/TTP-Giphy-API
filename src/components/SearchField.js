import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchField(props) {
  //Is this just 3 buttons and a text input?
  // search= search?q=
  // trending = trending?
  // random = random?
  return (
    <div>
      <Container>
        <Col>
      <Form id="gifLookup">
      <Row className ="justify-content-md-center">
        <Form.Label>
          <b>
            <i>Search Term: </i>
          </b>
        </Form.Label>
        <input
          type="text"
          id="searchTerm"
          name="searchTerm"
          placeholder="Try cats"
          onChange={props.handleChange}
        ></input>
        </Row>
        <Row className ="justify-content-md-center">
        <Button variant="secondary" onClick={() => props.getSearchResults("search")}>
          Search Gifs
        </Button>
        <Button
          variant="secondary"
          onClick={() => props.getSearchResults("trending")}
        >
          Trending Gifs
        </Button>
        <Button variant="secondary" onClick={() => props.getSearchResults("random")}>
          Random Gif
        </Button>
        </Row>
      </Form>
        </Col>
      </Container>
    </div>
  );
}

export default SearchField;
