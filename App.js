/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import Content from './redux/Content';
import { createStore } from 'redux';
import {mReducers} from './redux/reducer';

const store = createStore(mReducers);

const App = () => {
  return (
    <Provider store={store}>
      <Content />
    </Provider>
  );
};

export default App;
