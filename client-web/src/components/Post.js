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

import { formatDateTime } from '../helpers';

class Post extends React.Component {
  constructor(props) {
    super(props);
    const { postId } = this.props.match.params;
    this.state = {
      id: postId,
      item: null,
      error: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.loadPost();
  }

  loadPost() {
    const postId = this.state.id;
    const api = process.env.REACT_APP_API_HOST + "/posts/" + postId;
    fetch(api)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            item: result
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
    const item = this.state.item;
    let postJsx;
    if (item) {
      postJsx = (
      <Container fluid>
        <Row className="post"><Col>
          <div className="post">
            <div className="post">
              <div className="content">{item.content}</div>
              <div>
                <span className="author">{item.author ? item.author.nickname : 'Annoymous'}</span>&nbsp;
                <span className="postDateTime">{formatDateTime(item.createdAt)}</span>
              </div>
            </div>
          </div>
        </Col></Row>
      </Container>
      );
    }
    return (
      <div>
        {postJsx}
      </div>
    );
  }
}

export default withRouter(Post);

