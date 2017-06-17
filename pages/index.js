import React, { Component } from 'react';
import { initStore } from '../store.js';
import withRedux from 'next-redux-wrapper';
import Page from '../components/Page';

class App extends Component {
  render() {
    return <Page />;
  }
}

export default withRedux(initStore, null, null)(App);
