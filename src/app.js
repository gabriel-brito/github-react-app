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
      starred: [],
      isFetching: false
    };
  }

  getApiUrl(username, type) {
    const internalUsername = username ? `/${username}` : '';
    const internalType = type ? `/${type}` : '';
    return `https://api.github.com/users${internalUsername}${internalType}`;
  }

  handleSearch(e) {
    const value = e.target.value;
    const key = e.which || e.keyCode;
    const enterKey = 13;

    if (key === enterKey) {
      this.setState({ isFetching: true });

      ajax()
        .get(this.getApiUrl(value))
        .then(response => {
          this.setState({
            userInfo: {
              followers: response.followers,
              following: response.following,
              login: response.login,
              photo: response.avatar_url,
              repos: response.public_repos,
              username: response.name
            },
            repos: [],
            starred: []
          });
        })
        .always(() => {
          this.setState({ isFetching: false });
        });
    }
  }

  getRepos(type) {
    return (e) => {
      const login = this.state.userInfo.login;
      ajax()
        .get(this.getApiUrl(login, type))
        .then(response => {
          this.setState({
            [type]: response.map((repo, index) => (
              {
                name: response[index].name,
                link: response[index].html_url
              }
            ))
          });
        })
    }
  }

  render() {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
        isFetching={this.state.isFetching}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
      />
    );
  }
}

export default App;
