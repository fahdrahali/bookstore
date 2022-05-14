const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const initialState = {
  books: [
    {
      id: 1,
      title: 'Linux pocket guide',
      author: 'Daniel J. Barrett',
    },
    {
      id: 2,
      title: 'React Explained',
      author: ' Zac Gordon',
    },
  ],
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: return {
      books: [
        ...state.books,
        action.book,
      ],
    };
    case REMOVE_BOOK: return [...state.books.filter((book) => book.id !== action.book.id)];
    default: return state;
  }
};

export default booksReducer;
