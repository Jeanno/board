import React from 'react';
import config from '../config';
import { UserContext } from '../context/UserContext';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class NewPostForm extends React.Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      newPost: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({newPost: event.target.value});
  }

  handleSubmit(event) {
    // Handle submit new post
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: this.state.newPost 
      })
    };
    fetch(config.apiHost + "/posts/", req)
      .then(res => {
        this.setState({newPost: ''});
        this.props.callback();
      });
    event.preventDefault();
  }

  render() {
    let nicknameInput = null;
    if (!this.context.user) {
      nicknameInput = (
        <Form.Row>
          <Form.Group as={Col} lg={4} controlId="formContent">
            <Form.Label>Nickname</Form.Label>
            <Form.Control type="textarea" rows="5"
                name="post"
                onChange={this.handleChange}
                value={this.state.newPost} />
          </Form.Group>
        </Form.Row>
      );
    }
    return (
      <Container fluid>
        <Row><Col lg={6}>
          <Form onSubmit={this.handleSubmit}>
            {nicknameInput}
            <Form.Group controlId="formContent">
              <Form.Control type="textarea" rows="5"
                  name="post"
                  onChange={this.handleChange}
                  placeholder="Write your new post"
                  value={this.state.newPost} />
            </Form.Group>
            <Button type="submit">Post</Button>
          </Form>
        </Col></Row>
      </Container>
    );
  }
}

export default NewPostForm;
