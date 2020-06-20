import React from 'react';
import {
  Link,
  useRouteMatch,
  useParams,
  withRouter
} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  render() {
    const { postId } = this.props.match.params;
    return (
      <div>
        <h3>Post</h3>
        <p>{postId}</p>
      </div>
    );
  }
}

export default withRouter(Post);

