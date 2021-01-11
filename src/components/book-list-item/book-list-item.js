import React from 'react';

import './book-list-item.css';

const BookListItem = ({book, onAddToCartButtonClick}) => {
  const {title, author, price, coverImage} = book;

  return(
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <div className="book-title text-primary">{title}</div>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button className="btn btn-warning add-to-cart" onClick={onAddToCartButtonClick}>Add to cart</button>
      </div>
    </div>
  );
};

export default BookListItem;
