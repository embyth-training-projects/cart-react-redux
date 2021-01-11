import React from 'react';

import './store-header.css';

const StoreHeader = ({numItems, total}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shop-header">
      <a className="navbar-brand logo text-dark text-decoration-none" href="#/">BookStore</a>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <a className="shopping-cart text-decoration-none text-warning" href="#/">
          <i className="cart-icon fa fa-shopping-cart text-secondary" />
          {numItems} items (${total})
        </a>
      </div>
    </nav>
  );
};

export default StoreHeader;


