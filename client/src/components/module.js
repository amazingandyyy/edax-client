import React from 'react';
import '../../style/module.scss';

export default (props) => {
  return (<div className='module'>
    <div className='title'>{props.title}</div>
    {props.children}
  </div>)
}