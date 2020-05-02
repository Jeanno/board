import React from 'react';
import logo from './logo.svg';
import './App.css';

class PostList extends React.Component {
  render() {
    return (
      <div>
        <div>A quick brown fox jumps over a lazy dog.</div>
      </div>
    );
  }
}

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
    alert(this.state.newPost);
    // TODO: Handle submit new post
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

function App() {
  return (
    <div>
      <h1>Board</h1>
      <PostList />
      <NewPostForm />
    </div>
  );
}

export default App;
