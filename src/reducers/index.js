const initialState = {
  books: [],
  isLoading: true,
  isError: false,
  errorBody: null,
};

const reducer = (state = initialState, action) => {
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
      return state;
  }
};

export default reducer;
