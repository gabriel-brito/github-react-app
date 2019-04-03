'use strict';

import React, { PropTypes } from 'react';
import Search from './Search';
import UserInfo from './UserInfo';
import Actions from './Actions';
import Repos from './Repos';

const AppContent = ({ userInfo, repos, starred }) => (
  <div className="app">
    <Search />
    {!!userInfo && <UserInfo userInfo={userInfo} />}
    {!!userInfo && <Actions />}

    {!!repos.length && (
      <Repos
        className="repos"
        title="Repositórios"
        repos={repos}
      />
    )}

    {!!starred.length && (
      <Repos
        className="starred"
        title="Favoritos"
        repos={starred}
      />
    )}
  </div>
);

AppContent.propTypes = {
  userInfo: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
};

export default AppContent;
