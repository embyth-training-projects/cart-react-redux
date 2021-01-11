const updateBookList = (state, action) => {
  if (state === undefined) {
    return {
      books: [],
      isLoading: true,
      isError: false,
      errorBody: null,
    };
  }

  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        books: [],
        isLoading: true,
        isError: false,
        errorBody: null,
      };

    case 'FETCH_BOOKS_SUCCESS':
      return {
        books: action.payload,
        isLoading: false,
        isError: false,
        errorBody: null,
      };

    case 'FETCH_BOOKS_FAILURE':
      return {
        books: [],
        isLoading: false,
        isError: true,
        errorBody: action.payload,
      };

    default:
      return state.bookList;
  }
};

export default updateBookList;
