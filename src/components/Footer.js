// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="mt-5 fixed-bottom">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2023 Your Portfolio. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
