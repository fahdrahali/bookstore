import { checkPropTypes } from 'prop-types';
import React from 'react';

const Book = ({ title, author }) => (
  <div className="book">
    <h1>{title}</h1>
    <h2>{author}</h2>
    <button className="btn-delete" type="button">Delete</button>
  </div>
);

Book.propTypes = {
  title: checkPropTypes.isRequired,
  author: checkPropTypes.isRequired,
};

export default Book;
