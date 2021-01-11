import React, {Component} from 'react';
import {connect} from 'react-redux';

import {withStoreService} from '../hoc';
import {booksLoaded} from '../../actions';
import {compose} from '../../utils';

import BookListItem from '../book-list-item';

import './book-list.css';

class BookList extends Component {
  componentDidMount() {
    const {storeService} = this.props;
    const data = storeService.getBooks();

    this.props.booksLoaded(data);
  }

  render() {
    const {books} = this.props;

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

const mapStateToProps = ({books}) => {
  return {books};
};

const mapDispatchToProps = {
  booksLoaded
};

export default compose(
  withStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
