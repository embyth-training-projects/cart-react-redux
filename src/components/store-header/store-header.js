import React from 'react';
import {Link} from 'react-router-dom';

import './store-header.css';

const StoreHeader = ({numItems, total}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shop-header">
      <Link to="/">
        <span className="navbar-brand logo text-dark text-decoration-none">BookStore</span>
      </Link>

      <div className="collapse navbar-collapse cart-wrapper" id="navbarColor02">
        <Link to="/cart">
          <span className="shopping-cart text-decoration-none text-warning">
            <i className="cart-icon fa fa-shopping-cart text-secondary" />
            {numItems} items (${total})
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default StoreHeader;


