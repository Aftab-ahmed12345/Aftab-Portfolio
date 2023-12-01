// src/components/Contact.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleContact = (e)=>
  {
    (e).preventDefault();
    console.log(`name:${name}, email,${email},msg:${message}`);
  };




 
  
  return (
    <Container className="mt-5" style={{paddingTop:"8rem", paddingBottom:"10rem"}}>
      <h1 className="text-center mb-5">Contact</h1>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleContact}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control value={name} onChange={(e)=> setName(e.target.value)} required type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control value={email} onChange={(e)=> setEmail(e.target.value)} required type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control value={message} onChange={ (e)=> setMessage(e.target.value)} as="textarea" rows={4} placeholder="Enter your message" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
