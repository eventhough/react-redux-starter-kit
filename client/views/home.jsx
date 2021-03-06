import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

@connect(state => ({
  counter: state.counter,
}))
export default class HomeView extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
  }

  constructor() {
    super();
  }

  _increment() {
    // normally you'd import an action creator, but I don't want to create
    // a file that you're just going to delete anyways!
    this.props.dispatch({ type: 'COUNTER_INCREMENT' });
  }

  render() {
    return (
      <div className="container text-center">
        <h1>Welcome to the React Redux Starter Kit</h1>
        <h2>Sample Counter: {this.props.counter}</h2>
        <button className="btn btn-default"
                onClick={::this._increment}>
          Increment
        </button>
      </div>
    );
  }
}
