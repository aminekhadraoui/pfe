import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Mobile = () => {
  return (
    <Container className="my-4">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              src="https://via.placeholder.com/600x400.png?text=Mobile+App+Ad"
              alt="Mobile App Ad"
            />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <Card.Body>
              <h2>Discover Our New Mobile App!</h2>
              <p>
                Our new mobile app makes it easy to manage your account on the go. From tracking your spending to paying your bills, everything you need is right at your fingertips.
              </p>
              <Button variant="primary" size="lg">
                Download Now
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Mobile;