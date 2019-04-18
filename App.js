import React, { Component } from 'react';
import { Provider } from 'react-redux';

import AppContainer from './AppNavigator';

//Import the store
import store from './app/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}