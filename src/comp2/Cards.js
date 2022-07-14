import React from "react";
import Card from "react-bootstrap/Card";
function Cards({ title, text }) {
  return (
    <div className="mb-3 mt-2 ">
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
