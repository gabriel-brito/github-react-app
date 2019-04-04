'use strict';

import React from 'react';

const Search = ({ handleSearch, isDisabled }) => (
  <div className='search'>
    <input 
    type='search'
    disabled={isDisabled}
    placeholder='Digite o nome do usuário:'
    onKeyUp={handleSearch}
    />
  </div>
)

export default Search;