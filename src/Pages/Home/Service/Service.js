import React from "react";
import { Button, Card } from "react-bootstrap";
import { BsStar, BsStarFill } from "react-icons/bs";
import Rating from "react-rating";
import { useNavigate } from "react-router-dom";
const Service = ({ roam }) => {
  const { name, picture, rating, price } = roam;

  const navigate = useNavigate();
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <Card>
        <Card.Img
          style={{ width: "100%", height: "200px" }}
          variant="top"
          src={picture}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <h4>Price ${price}</h4>
          <h4>
            Rating{" "}
            <Rating
              initialRating={rating}
              emptySymbol={<BsStar />}
              fullSymbol={<BsStarFill style={{ color: "goldenrod" }} />}
              readonly
            ></Rating>
          </h4>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={() => navigate("/inventory")} variant="primary">
            book Now {name}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
