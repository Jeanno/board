import React from 'react';

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

  formatDateTime(datetime) {
    const unixTime = Date.parse(datetime);
    const now = Date.now();
    const secondsAgo = (now - unixTime) / 1000;
    if (secondsAgo < 60) {
      return "Just now";
    } else if (secondsAgo < 3600) {
      const minsAgo = Math.floor(secondsAgo / 60);
      return minsAgo + " minutes ago";
    } else if (secondsAgo < 86400) {
      const hoursAgo = Math.floor(secondsAgo / 3600);
      return hoursAgo + " hours ago";
    }
    const date = new Date(unixTime);
    const yearFormat = date.getFullYear() === new Date(now).getFullYear() ?
      undefined : 'numeric';
    const options = {
      month: 'short', day: 'numeric', year: yearFormat,
      hour: 'numeric', minute: 'numeric'
    };
    return new Intl.DateTimeFormat('default', options).format(date);
  }

  render() {
    const { items, isLoaded, error } = this.state;
    const formatDateTime = this.formatDateTime;
    return (
      <Container fluid>
        {items.map((item, i) => (
          <Row className="post" key={item.id}><Col>
            <div className="post">
              <div className="content">{item.content}</div>
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

