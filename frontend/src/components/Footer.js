import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPaypal, FaCreditCard } from 'react-icons/fa';
import './Footer.css'; // Import your custom CSS for animation styles

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-center">
            <div className="footer-icons">
              <FaPaypal className="paypal-icon" />
              <FaCreditCard className="credit-card-icon" />
            </div>
            <p className="text-muted">© 2023 Afar. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
