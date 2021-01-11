import React from 'react';
import {Route, Switch} from 'react-router-dom';

import StoreHeader from '../store-header';
import {HomePage, CartPage} from '../pages';

import './app.css';

const App = () => {
  return (
    <main role="main" className="container">
      <StoreHeader />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </main>
  );
};

export default App;
