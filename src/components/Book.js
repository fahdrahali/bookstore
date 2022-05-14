import { checkPropTypes } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const { title, author } = book;
  const deleteBook = (book) => {
    dispatch(removeBook(book));
  };
  return (
    <div className="book">
      <h1>{title}</h1>
      <h2>{author}</h2>
      <button className="btn-delete" type="button" onClick={() => deleteBook(book)}>Delete</button>
    </div>
  );
};

Book.propTypes = {
  book: checkPropTypes.isRequired,
};

export default Book;
