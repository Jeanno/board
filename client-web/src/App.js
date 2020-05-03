import React from 'react';
import logo from './logo.svg';
import './App.css';
import config from './config';

import PostList from './components/PostList'

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea rows="4" cols="50"
              name="post"
              onChange={this.handleChange}
              value={this.state.newPost} />
          <div>
            <input type="submit" value="Post" />
          </div>
        </form>
      </div>
    );
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: 0
    };
    this.onSubmitPost = this.onSubmitPost.bind(this);
  }

  onSubmitPost() {
    this.setState({refresh: this.state.refresh + 1});
  }

  render() {
    return (
      <div>
        <h1>Board</h1>
        <PostList refresh={this.state.refresh} />
        <NewPostForm callback={this.onSubmitPost} />
      </div>
    );
  }
}

export default App;
