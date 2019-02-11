// importing React is nec to compile JSX expressions to calls to React.createElement()
import React, { Component } from 'react';

export default class Counter extends Component {
  state = { value: 1 };

  render() {
    return (
      <div>
        <div>{ this.state.value }</div>
        <button onClick={() => { this.setState({ value: this.state.value + 1}) }}>increment it</button>
      </div>
    )
  }
}
