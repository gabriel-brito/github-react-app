'use strict';

import React, { Component } from 'react';
import ajax from '@fdaciuk/ajax';
import AppContent from './components/AppContent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: null,
      repos: [],
      starred: []
    };
  }

  handleSearch(e) {
    const value = e.target.value;
    const key = e.which || e.keyCode;
    const enterKey = 13;

    if (key === enterKey) {
      ajax()
        .get(`https://api.github.com/users/${value}`)
        .then(response => {
          this.setState({
            userInfo: {
              followers: response.followers,
              following: response.following,
              login: response.login,
              photo: response.avatar_url,
              repos: response.public_repos,
              username: response.name
            }
          });
        });
    }
  }

  render() {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
      />
    );
  }
}

export default App;
