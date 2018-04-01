import React from 'react';
import './search.scss';

const search = props => {
  return (
    <div>
      <form onSubmit={props.submit}>
        <input className="search-input" type="text" name="search-input" placeholder="Type character name" onChange={props.changed} autoComplete="off" />
      </form>
    </div>
  )
}

export default search;
