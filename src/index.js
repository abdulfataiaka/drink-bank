import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import App from './components/App';
import history from './history';
import createStore from './store';
import { getBeers } from './actions/beers';

const store = createStore({});
store.dispatch(getBeers());

// store.subscribe(() => { console.log(store.getState()); });

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('app-container')
);
