import React from 'react';
import config from '../config';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    this.refreshPosts();
  }


  componentDidUpdate(prevProps) {
    if (this.props.refresh !== prevProps.refresh) {
      this.refreshPosts();
    }
  }

  refreshPosts() {
    const api = config.apiHost + "/posts"
    fetch(api)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { items, isLoaded, error } = this.state;
    return (
      <Container fluid>
        {items.map((item, i) => (
          <Row className="post" key={item.id}><Col>
            <div className="post">
              <div className="content">{item.content}</div>
              <div className="author">{item.author ? item.author.nickname : 'Annoymous'}</div>
            </div>
          </Col></Row>
        ))}
      </Container>
    );
  }
}

export default PostList;

