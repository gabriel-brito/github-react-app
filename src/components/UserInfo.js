'use strict';

import React from 'react';

const UserInfo = () => (
  <div className='user-info'> 
    <img src='https://avatars0.githubusercontent.com/u/16655018?v=4' />
    <h1 className='username'>
      <a href='https://github.com/gabriel-brito'>Gabriel Brito</a>
    </h1>
  
    <ul className='repos-info'>
      <li>Repositórios: 57 </li>
      <li>Seguidores: 33 </li>
      <li>Seguindo: 10 </li>
    </ul>
  </div>
)


export default UserInfo;