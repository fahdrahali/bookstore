import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  console.log('books', books);
  const [currBooks, setCurrBooks] = useState(books);

  useEffect(() => {
    setCurrBooks([...books]);
  }, [books]);

  return (
    <div className="books">
      { currBooks.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <Form />
    </div>
  );
};

export default Books;
