import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div>Age:{this.props.cnt} <span></span></div>
        <button onClick={this.props.onIncrement}>Increment</button>
        <button onClick={this.props.onDecrement}>Decrement</button>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    cnt:state.cnt
  }
};
const dispatchToProps = (dispach) => {
  return {
    onIncrement: () => dispach({type:'INCREMENT'}),
    onDecrement: () => dispach({type:'DECREMENT'})
  }
}
export default connect(stateToProps, dispatchToProps)(App);
