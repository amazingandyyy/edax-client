import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Home extends Component {
  componentDidMount(){
    this.props.getData()
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}
function mapStateToProps({gdax}){
  console.log(gdax);
  return {
    gdax
  }
}

export default connect(mapStateToProps, actions)(Home)