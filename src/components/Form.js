import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  const [book, setBook] = useState({ title: '', author: '' });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: [e.target.value],
    });
  };

  const addNewBook = (e) => {
    e.preventDefault();
    const { title, author } = e.target;
    const newBook = {
      id: uuidv4(),
      title: book.title[0],
      author: book.author[0],
    };
    title.value = '';
    author.value = '';
    dispatch(addBook(newBook));
  };

  return (
    <div className="form-container" onSubmit={(e) => addNewBook(e)}>
      <h1>ADD NEW BOOK</h1>
      <form className="form">
        <input type="text" name="title" placeholder="title" onChange={handleChange} required />
        <input type="text" name="author" placeholder="author" onChange={handleChange} required />
        <button
          type="submit"
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
