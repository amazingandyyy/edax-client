import React, { Component } from 'react';
import { initStore } from '../redux/store.js';
import withRedux from 'next-redux-wrapper';
import Layout from '../components/Layout';

class App extends Component {
  render() {
    return <Layout />;
  }
}

export default withRedux(initStore, null, null)(App);
