import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './store-header.css';

const StoreHeader = ({items, total}) => {
  const getCartInnerText = () => {
    const itemsQuantity = items.reduce((acc, item) => item.count + acc, 0);
    const cartText = itemsQuantity === 1 ? `item` : `items`;
    return itemsQuantity === 0 ? `Empty` : `${itemsQuantity} ${cartText} ($${total})`;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shop-header">
      <Link to="/">
        <span className="navbar-brand logo text-dark text-decoration-none">BookStore</span>
      </Link>

      <div className="collapse navbar-collapse cart-wrapper" id="navbarColor02">
        <Link to="/cart" className="text-decoration-none text-warning">
          <span className="shopping-cart">
            <i className="cart-icon fa fa-shopping-cart text-secondary" />
            {getCartInnerText()}
          </span>
        </Link>
      </div>
    </nav>
  );
};

const mapStateToProps = ({shoppingCart: {cartItems, cartTotal}}) => {
  return {
    items: cartItems,
    total: cartTotal,
  };
};

export default connect(mapStateToProps)(StoreHeader);
