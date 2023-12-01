// src/components/Blog.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const blogPosts = [
  {
    id: 1,
    title: 'Introduction to React Hooks',
    content: 'Learn how to use React Hooks for state management in functional components.',
  },
  {
    id: 2,
    title: 'Building Responsive Web Design with Bootstrap',
    content: 'Explore the basics of responsive web design using the Bootstrap framework.',
  },
  {
    id: 3,
    title: 'JavaScript ES6 Features Every Developer Should Know',
    content: 'Discover the powerful features introduced in ECMAScript 2015 (ES6).',
  },
];

const Blog = () => {
  return (
    <Container className="mt-5" style={{paddingTop:"8rem", paddingBottom:"10rem"}}>
      <h1 className="text-center mb-5">Blog</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {blogPosts.map((post) => (
          <Col key={post.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
                <Button variant="primary" href={`/blog/${post.id}`}>
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
