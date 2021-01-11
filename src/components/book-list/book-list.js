import React, {Component} from 'react';
import {connect} from 'react-redux';

import {withStoreService} from '../hoc';
import {booksLoaded, booksRequested} from '../../actions';
import {compose} from '../../utils';

import BookListItem from '../book-list-item';
import Spinner from '../spinner/';

import './book-list.css';

class BookList extends Component {
  componentDidMount() {
    const {storeService, booksLoaded, booksRequested} = this.props;

    booksRequested();
    storeService.getBooks()
      .then((data) => booksLoaded(data));
  }

  render() {
    const {books, isLoading} = this.props;

    if (isLoading) {
      return <Spinner />;
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

const mapStateToProps = ({books, isLoading}) => {
  return {books, isLoading};
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested
};

export default compose(
  withStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
