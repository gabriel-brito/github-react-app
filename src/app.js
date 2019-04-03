'use strict';

import React, { Component } from 'react';
import AppContent from './components/AppContent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: 'Gabriel Brito',
        repos: 57,
        followers: 33,
        following: 30
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
