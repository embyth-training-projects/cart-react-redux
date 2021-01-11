const initialState = {
  books: [],
  isLoading: true,
  isError: false,
  errorBody: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_REQUESTED':
      return {
        books: [],
        isLoading: true,
        isError: false,
        errorBody: null,
      };
    case 'BOOKS_LOADED':
      return {
        books: action.payload,
        isLoading: false,
        isError: false,
        errorBody: null,
      };
    case 'BOOKS_ERROR':
      return {
        books: [],
        isLoading: false,
        isError: true,
        errorBody: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
