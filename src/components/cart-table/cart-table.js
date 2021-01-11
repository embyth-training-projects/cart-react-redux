import React from 'react';
import {connect} from 'react-redux';

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

const mapStateToProps = ({cartItems, cartTotal}) => {
  return {
    items: cartItems,
    total: cartTotal,
  };
};

const mapDispatchToProps = () => {
  return {
    onIncreaseButtonClick: (id) => {
      console.log(`Incresed ${id}`);
    },
    onDecreaseButtonClick: (id) => {
      console.log(`Decresed ${id}`);
    },
    onRemoveButtonClick: (id) => {
      console.log(`Removed ${id}`);
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
