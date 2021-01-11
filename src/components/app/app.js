import React from 'react';

import {withStoreService} from '../hoc';

import './app.css';

const App = ({storeService}) => {
  console.log(storeService.getBooks());
  return <div>App</div>;
};

export default withStoreService()(App);
