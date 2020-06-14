import React from 'react';
import logo from './logo.svg';
import './App.css';

import { UserContext } from './context/UserContext';

import PostList from './components/PostList';
import NewPostForm from './components/NewPostForm';
import TopBar from './components/TopBar';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmitPost = this.onSubmitPost.bind(this);
    this.register = this.register.bind(this);
    this.state = {
      refresh: 0,
      user: null,
      token: null,
      register: this.register,
      userIsLoaded: false
    };
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser() {
    const store = window.localStorage;
    const user = JSON.parse(store.getItem('user'));
    const token = JSON.parse(store.getItem('token'));
    this.setState({
      user: user,
      token: token,
      userIsLoaded: true,
    });
  }

  async register(nickname) {
    // Register with nickname
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nickname: nickname
      })
    };
    const res = await fetch(process.env.REACT_APP_API_HOST + "/users/", req);
    const json = await res.json();
    this.setState({
      user: json,
      token: json.accessTokens[0]
    });
    const store = window.localStorage;
    store.setItem('user', JSON.stringify(json));
    store.setItem('token', JSON.stringify(json.accessTokens[0]));
  }

  onSubmitPost() {
    this.setState({refresh: this.state.refresh + 1});
  }

  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <TopBar />
          <PostList refresh={this.state.refresh} />
          <hr />
          <NewPostForm callback={this.onSubmitPost} />
          <div style={{color: "#999"}}>API_HOST: {process.env.REACT_APP_API_HOST}</div>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
