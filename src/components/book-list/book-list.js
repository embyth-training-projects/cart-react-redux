import React, {Component} from 'react';
import {connect} from 'react-redux';

import {withStoreService} from '../hoc';
import {fetchBooks} from '../../actions';
import {compose} from '../../utils';

import BookListItem from '../book-list-item';
import Spinner from '../spinner/';
import ErrorIndicator from '../error-indicator';

import './book-list.css';

const BookList = ({books}) => {
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}><BookListItem book={book} /></li>
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
    const {books, isLoading, isError, errorBody} = this.props;

    if (isLoading) {
      return <Spinner />;
    }

    if (isError) {
      return <ErrorIndicator errorBody={errorBody} />;
    }

    return <BookList books={books} />;
  }
}

const mapStateToProps = ({books, isLoading, isError, errorBody}) => {
  return {books, isLoading, isError, errorBody};
};

const mapDispatchToProps = (dispatch, {storeService}) => {
  return {
    fetchBooks: fetchBooks(storeService, dispatch)
  };
};

export default compose(
  withStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
