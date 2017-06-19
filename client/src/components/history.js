import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import moment from 'moment';

class History extends Component {
  state = {
    matchOrdersQueue: []
  }
  componentDidMount() {
    this
      .props
      .getData();
  }
  componentWillReceiveProps(oldProps) {
    var newOrder = oldProps.matchOrders;
    if (newOrder) {
      var matchOrdersQueue = [...this.state.matchOrdersQueue];
      matchOrdersQueue.unshift(newOrder);
      if (matchOrdersQueue.length >= 100) {
        matchOrdersQueue.splice(100, matchOrdersQueue.length);
      }
      this.setState({matchOrdersQueue: matchOrdersQueue});
    }
  }
  renderSize(size) {
    var sizeArr = size
      .toString()
      .split('.');
    if (size % 1 === 0) {
      var secondFraction = sizeArr[1].split('');
      return (
        <span className="sizeGroup">
          <span className="integer">
            {sizeArr[0]}
          </span>
          <span className="decimal">.</span>
          <span className="fraction">
            {secondFraction.splice(0, 1)}
            <span className="opacity">
              {secondFraction}
            </span>
          </span>
        </span>
      )
    } else {
      return (
        <span>
          <span className="integer">
            {sizeArr[0]}
          </span>
          <span className="decimal">.</span>
          <span className="fraction">
            {this.renderSizeFraction(sizeArr[1])}
          </span>
        </span>
      )
    }
  }
  renderSizeFraction(n='') {
    var totalDigit = n.length;
    var number = Number(n);
    var missingZeroNum = totalDigit - number.toString().length;
    var digitNum = '';
    while (number % 10 === 0) {
      digitNum += '0';
      number = number / 10;
    }
    for (var i = 0, leadingZero = ''; i < missingZeroNum; i++,leadingZero += '0');
    console.log('digitNum', digitNum);
    return (
      <span>
        {leadingZero}{number}
        <span className="opacity">
          {digitNum}
        </span>
      </span>
    )
  }
  renderPrice(price) {
    return (
      <span>
        {(Math.floor(price * 100) / 100).toFixed(2).split('.')[0]}
        <span className="decimal">.</span>
        <span className='light'>
          {(Math.floor(price * 100) / 100).toFixed(2).split('.')[1]}
        </span>
      </span>
    )
  }
  renderMatchOrders() {
    if (this.state.matchOrdersQueue.length > 0) {
      return this
        .state
        .matchOrdersQueue
        .map((order, id) => (
          <li
            key={order.sequence}
            className={'trade_history_item ' + order.side}
            style={{
            'animationDelay': '0s'
          }}>
            <div className='list_item_fade' style={{'animationDelay': `${-0.45*(id/100)}s` }}>
              <span className='size'>
                <span className='size_graph'>
                  <span
                    className={'graph ' + order.side}
                    style={{
                    'width': `${ 100*order.size/1000}%`
                  }}></span>
                </span>
                {this.renderSize(order.size)}
              </span>
              <span className={'price ' + order.side}>
                {this.renderPrice(order.price)}
              </span>
              <span className='time'>
                {moment(order.time).format('HH:mm:ss')}
              </span>
            </div>
          </li>
        ))
    }
  }
  render() {
    return (
      <div className='history'>
      <div className='header'>
        <span className='size'>
            trade size
        </span>
        <span className='price'>price (USD)</span>
        <span className='time'>time</span>
      </div>
      <div className='list_wrapper'>
        <ul className="list">
          {this.renderMatchOrders()}
        </ul>
      </div>
      </div>
    );
  }
}
function mapStateToProps({gdax}) {
  return {matchOrders: gdax.matchOrders}
}

export default connect(mapStateToProps, actions)(History)