import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';



const Counter = ({counter, inc, dec, rnd}) => {
  return (
    <div className='jumbotron'>
      <h1>{counter}</h1>
      <button onClick={dec} className="btn btn-primary">DEC</button>
      <button onClick={inc} className="btn btn-primary">INC</button>
      <button onClick={rnd} className="btn btn-primary">RND</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {counter: state};
};

const mapDispatchToProps = (dispatch) => {
  const {inc, dec, rnd} = bindActionCreators(actions, dispatch);
  return {
    inc, 
    dec,
    rnd: () => {
      const value = Math.floor(Math.random()*10) - 5;
      rnd(value);
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// if there is no input value e.g. rnd_value
// export default connect(mapStateToProps, actions)(Counter);