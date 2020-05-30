import React from 'react';
import logo from './logo.svg';
import './App.css';
import config from './config';

import { UserContext } from './context/UserContext';

import Navbar from 'react-bootstrap/Navbar';
import PostList from './components/PostList';
import NewPostForm from './components/NewPostForm';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: 0,
      userContext: null,
    };
    this.onSubmitPost = this.onSubmitPost.bind(this);

  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser() {
    const store = window.localStorage;
    const user = store.getItem('user');
    this.setState({
      userContext: {
        user: user,
        isLoaded: true
      }
    });
  }

  onSubmitPost() {
    this.setState({refresh: this.state.refresh + 1});
  }

  render() {
    return (
      <div>
        <UserContext.Provider>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Board</Navbar.Brand>
          </Navbar>
          <PostList refresh={this.state.refresh} />
          <NewPostForm callback={this.onSubmitPost} />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
