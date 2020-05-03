import React from 'react';
import config from '../config';

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
      <div>
        <div>{this.props.refresh}</div>
        {items.map((item, i) => (
          <div key={i}>{item.content}</div>
        ))}
      </div>
    );
  }
}

export default PostList;

