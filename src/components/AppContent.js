'use strict';

import React from 'react';
import Search from './Search';
import UserInfo from './UserInfo';
import Actions from './Actions';
import Repos from './Repos';

const AppContent = () => (
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

export default AppContent;