import React from 'react';
import {connect} from 'react-redux';

import {bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart} from '../../actions';

import './cart-table.css';

const CartTable = ({items, total, onIncreaseButtonClick, onDecreaseButtonClick, onRemoveButtonClick}) => {
  const createTableRow = (item, index) => {
    const {id, title, count, total} = item;

    return (
      <tr key={id} className="text-center">
        <td>{index + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{`${total}`}</td>
        <td className="text-center">
          <button className="btn btn-outline-danger btn-sm" onClick={() => onRemoveButtonClick(id)}>
            <i className="fa fa-trash-o" />
          </button>
          <button className="btn btn-outline-success btn-sm" onClick={() => onIncreaseButtonClick(id)}>
            <i className="fa fa-plus-circle" />
          </button>
          <button className="btn btn-outline-warning btn-sm" onClick={() => onDecreaseButtonClick(id)}>
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };

  if (items.length === 0) {
    return (
      <div className="alert alert-dismissible alert-warning p-4">
        <h4 className="alert-heading text-center mb-4">Your cart is currently empty!</h4>
        <p className="mb-0 text-center">Use our catalog to find what you are looking for and add to your shopping cart.</p>
      </div>
    );
  }

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            items.map(createTableRow)
          }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

const mapStateToProps = ({shoppingCart: {cartItems, cartTotal}}) => {
  return {
    items: cartItems,
    total: cartTotal,
  };
};

const mapDispatchToProps = {
  onIncreaseButtonClick: bookAddedToCart,
  onDecreaseButtonClick: bookRemovedFromCart,
  onRemoveButtonClick: allBooksRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
