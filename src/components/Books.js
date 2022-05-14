import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  const [currBooks, setCurrBooks] = useState(books);

  useEffect(() => {
    setCurrBooks([...books]);
  }, [books]);

  return (
    <div className="books">
      { currBooks.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <Form />
    </div>
  );
};

export default Books;
