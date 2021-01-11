const initialState = {
  books: [],
  isLoading: true,
  isError: false,
  errorBody: null,
  cartItems: [
    {
      id: 1,
      title: 'Book 1',
      count: 2,
      total: 50,
    },
    {
      id: 2,
      title: 'Book 2',
      count: 3,
      total: 120,
    },
  ],
  cartTotal: 170,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        isLoading: true,
        isError: false,
        errorBody: null,
      };
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        isLoading: false,
        isError: false,
        errorBody: null,
      };
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
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
