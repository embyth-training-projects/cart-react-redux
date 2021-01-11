import React, {Component} from 'react';
import {connect} from 'react-redux';

import {withStoreService} from '../hoc';
import {fetchBooks, bookAddedToCart} from '../../actions';
import {compose} from '../../utils';

import BookListItem from '../book-list-item';
import Spinner from '../spinner/';
import ErrorIndicator from '../error-indicator';

import './book-list.css';

const BookList = ({books, onAddToCartButtonClick}) => {
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}><BookListItem book={book} onAddToCartButtonClick={() => onAddToCartButtonClick(book.id)} /></li>
          );
        })
      }
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const {books, isLoading, isError, errorBody, onAddToCartButtonClick} = this.props;

    if (isLoading) {
      return <Spinner />;
    }

    if (isError) {
      return <ErrorIndicator errorBody={errorBody} />;
    }

    return <BookList books={books} onAddToCartButtonClick={onAddToCartButtonClick} />;
  }
}

const mapStateToProps = ({books, isLoading, isError, errorBody}) => {
  return {books, isLoading, isError, errorBody};
};

const mapDispatchToProps = (dispatch, {storeService}) => {
  return {
    fetchBooks: fetchBooks(storeService, dispatch),
    onAddToCartButtonClick: (id) => dispatch(bookAddedToCart(id)),
  };
};

export default compose(
  withStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
