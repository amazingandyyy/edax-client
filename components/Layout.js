import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class Layout extends Component {
  componentDidMount() {
    this.props.getMessages();
  }
  renderCurrentPrice(){
    if(this.props.matches){
      return this.props.matches.map((order, id)=>{
        return <div key={id}>{order.price}</div>
      })
    }
  }
  render() {
    return (<div>
      <div className="price">
      </div>
    </div>);
  }
}

function mapStateToProps({gdax}) {
  const {matches} = gdax;
  return {
    matches
  };
}

export default connect(mapStateToProps, actions)(Layout);
