import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import { formatDateTime } from '../helpers';

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
    const api = process.env.REACT_APP_API_HOST + "/posts"
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
      <Container className="postList" fluid>
        {items.map((item, i) => (
          <Row className="postRow" key={item.id}><Col>
            <div className="post">
              <div className="content">
                <Link to={'posts/' + item.id}>{item.content}</Link>
              </div>
              <div>
                <span className="author">{item.author ? item.author.nickname : 'Annoymous'}</span>&nbsp;
                <span className="postDateTime">{formatDateTime(item.createdAt)}</span>
              </div>
            </div>
          </Col></Row>
        ))}
      </Container>
    );
  }
}

export default PostList;

