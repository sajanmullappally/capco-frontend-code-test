import React, { Component } from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Row>
            <Col>
            <Alert variant="danger" className='my-5'>
            <Alert.Heading>Error!</Alert.Heading>
              <p>
                Something went wrong. Please try again later
              </p>
          </Alert>
            </Col>
          </Row>
        </Container>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary