import React from 'react';
import './pagination.scss';

const pagination = (props) => {
  return (
    <div className="pagination-container">
      <button className="previous" onClick={() => props.onPageChange('prev')} disabled={props.page === 1}>Prev</button>
      <span>Page {props.page} of {props.maxPage}</span>
      <button className="next" onClick={() => props.onPageChange('next')} disabled={props.page === props.maxPage}>Next</button>
    </div>
  )
}

export default pagination;