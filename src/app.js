'use strict'

import React from 'react'
import Search from './components/Search';
import UserInfo from './components/UserInfo';
import Actions from './components/Actions';
import Repos from './components/Repos';

const App = () => (
  <div className='app'>
    <Search />
    <UserInfo />
    <Actions />
    <Repos 
      className='repos' 
      title='Repositórios'
      repos={[{
        name: 'Nome do repositório',
        link: '#'
      }]}
    />
    <Repos 
      className='starred' 
      title='Favoritos'
      repos={[{
        name: 'Nome do repositório',
        link: '#'
      }]}
    />
  </div>
)

export default App
