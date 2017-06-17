import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeName } from '../redux/store';
import { bindActionCreators } from 'redux';

class Layout extends Component {
  componentDidMount() {
    console.log();
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
