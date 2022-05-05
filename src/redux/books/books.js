const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const initialState = {
  books: [],
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
    case ADD_BOOK: return [
      ...state.books,
      {
        title: action.book.title,
        author: action.book.author,
      },
    ];
    case REMOVE_BOOK: return state.books.filter((book) => book.id !== action.book.id);
    default: return state;
  }
};

export default booksReducer;
