import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeName } from '../store';
import { bindActionCreators } from 'redux';

class Page extends Component {
  componentDidMount() {
    console.log();
  }
  // cclick(){
  //   console.log('eee')
  //   //
  // }
  render() {
    return (
      <div onClick={() => this.props.changeName('new Andy')}>
        {this.props.auther}
      </div>
    );
  }
}

function mapStateToProps({ auther }) {
  return {
    auther
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeName: bindActionCreators(changeName, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
