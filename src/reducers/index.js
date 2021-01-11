import {updateCartItems, updateCartItem} from '../utils';

const initialState = {
  books: [],
  isLoading: true,
  isError: false,
  errorBody: null,
  cartItems: [],
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
    case 'BOOK_ADDED_TO_CART':
      const bookId = action.payload;
      const book = state.books.find((book) => book.id === bookId);
      const itemIndex = state.cartItems.findIndex(({id}) => id === bookId);
      const item = state.cartItems[itemIndex];

      const newItem = updateCartItem(book, item);

      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex),
      }
    default:
      return state;
  }
};

export default reducer;
