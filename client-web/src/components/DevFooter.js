import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DevFooter() {
  return (
    <Container style={{color: "#BBB"}} fluid>
      <Row><Col>
        <p>VERSION: v0.0.1<br/>
        API_HOST: {process.env.REACT_APP_API_HOST}</p>
      </Col></Row>
    </Container>
  );
};
export default DevFooter;
