import React from "react";
import { Button, Card } from "react-bootstrap";

const Service = ({ roam }) => {
  const { name, picture, rating, price } = roam;
  return (
    <Card className="col-13 col-md-6 col-lg-4">
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <h4>Price ${price}</h4>
        <h4>Rating {rating}</h4>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">book Now {name}</Button>
      </Card.Body>
    </Card>
  );
};

export default Service;
