import React from 'react';
import config from '../config';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class NewPostForm extends React.Component {
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
    return (
      <Container fluid>
        <Row><Col>
          <Form onSubmit={this.handleSubmit}>
            <Form.Control type="textarea" rows="5"
                name="post"
                onChange={this.handleChange}
                value={this.state.newPost} />
            <div>
              <Button type="submit">Post</Button>
            </div>
          </Form>
        </Col></Row>
      </Container>
    );
  }
}

export default NewPostForm;
