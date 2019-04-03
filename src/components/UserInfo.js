'use strict';

import React, { PropTypes } from 'react';

const UserInfo = ({ userinfo }) => (
  <div className='user-info'> 
    <img src={userinfo.photo}/>
    <h1 className='username'>
      <a href={`https://github.com/${userinfo.login}`}>
        {userInfo.username}
      </a>
    </h1>
  
    <ul className='repos-info'>
      <li>Repositórios: {userinfo.repos} </li>
      <li>Seguidores: {userinfo.followers} </li>
      <li>Seguindo: {userinfo.following} </li>
    </ul>
  </div>
)

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    login: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired
  })
}

export default UserInfo;