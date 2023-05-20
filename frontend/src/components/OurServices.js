import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { FaShippingFast, FaRegCreditCard, FaRegGem } from 'react-icons/fa';

const OurServices = () => {
  return (
    <section id='our-services' className='py-5'>
      <Container>
        <h2 className='text-center mb-4'>Our Services</h2>
        <Row>
          <Col md={4} className='mb-3'>
            <Card>
              <Card.Body>
                <FaShippingFast className='mb-3' size={48} />
                <Card.Title>Free Shipping</Card.Title>
                <Card.Text>
                  We offer free shipping on all orders over $50, so you can get
                  your jewelry without having to worry about extra fees.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='mb-3'>
            <Card>
              <Card.Body>
                <FaRegCreditCard className='mb-3' size={48} />
                <Card.Title>Secure Checkout</Card.Title>
                <Card.Text>
                  We use secure payment systems to ensure that your personal
                  information is protected when you make a purchase.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='mb-3'>
            <Card>
              <Card.Body>
                <FaRegGem className='mb-3' size={48} />
                <Card.Title>High-Quality Jewelry</Card.Title>
                <Card.Text>
                  We source our jewelry from the best suppliers to ensure that
                  you get high-quality pieces that are made to last.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col>
            <ListGroup variant='flush'>
              
              <ListGroup.Item>
                <strong>24/7 Customer Support:</strong> Our customer support
                team is available 24/7 to answer any questions you may have.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Custom Jewelry:</strong> We offer custom jewelry design
                services so you can create a one-of-a-kind piece that's perfect
                for you.
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurServices;