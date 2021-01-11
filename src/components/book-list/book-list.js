import React, {Component} from 'react';
import {connect} from 'react-redux';

import {withStoreService} from '../hoc';
import {booksLoaded, booksRequested, booksError} from '../../actions';
import {compose} from '../../utils';

import BookListItem from '../book-list-item';
import Spinner from '../spinner/';
import ErrorIndicator from '../error-indicator';

import './book-list.css';

class BookList extends Component {
  componentDidMount() {
    const {storeService, booksLoaded, booksRequested, booksError} = this.props;

    booksRequested();
    storeService.getBooks()
      .then((data) => booksLoaded(data))
      .catch((error) => booksError(error));
  }

  render() {
    const {books, isLoading, isError, errorBody} = this.props;

    if (isLoading) {
      return <Spinner />;
    }

    if (isError) {
      return <ErrorIndicator errorBody={errorBody} />;
    }

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
  }
}

const mapStateToProps = ({books, isLoading, isError, errorBody}) => {
  return {books, isLoading, isError, errorBody};
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError
};

export default compose(
  withStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
