import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "./Cards";

function ItemsGroup() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Cards
              title="Declarative"
              text="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug."
            />
            <Cards
              title="Component-Based"
              text="Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM."
            />
            <Cards
              title="Learn Once, Write Anywhere"
              text="We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

React can also render on the server using Node and power mobile apps using React Native."
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ItemsGroup;
