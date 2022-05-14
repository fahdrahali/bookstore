// import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = useSelector((state) => state.books.books);

  // const books = [{ id: 1, title: 'The Hunger Games', author: 'Suzannes Collins' },
  //   { id: 2, title: 'Dune', author: 'Frank' }];

  // useEffect(() => {
  //   setBooks([...listBooks]);
  // }, [setBooks]);

  return (
    <div className="books">
      { books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <Form />
    </div>
  );
};

export default Books;
