'use strict';

import React, { Component } from 'react';
import AppContent from './components/AppContent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        followers: 33,
        following: 30,
        login: 'gabriel-brito',
        repos: 57,
        username: 'Gabriel Brito',
        photo: 'https://avatars0.githubusercontent.com/u/16655018?v=4'
      },
      repos: [
        {
          name: 'Repositórios',
          link: '#'
        }
      ],
      starred: [
        {
          name: 'Favoritos',
          link: '#'
        }
      ]
    };
  }

  render() {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    );
  }
}

export default App;
