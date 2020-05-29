import React from 'react';
import logo from './logo.svg';
import './App.css';
import config from './config';

import Navbar from 'react-bootstrap/Navbar';
import PostList from './components/PostList';
import NewPostForm from './components/NewPostForm';


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
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Board</Navbar.Brand>
        </Navbar>
        <PostList refresh={this.state.refresh} />
        <NewPostForm callback={this.onSubmitPost} />
      </div>
    );
  }
}

export default App;
