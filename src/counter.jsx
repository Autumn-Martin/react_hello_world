// importing React is nec to compile JSX expressions to calls to React.createElement()
import React, { Component } from 'react';

export default class Counter extends Component {
  state = { value: 1 };

  render() {
    // the curly brackets below allow values to be passed dynamically
    // valid JavaScript expressions can be written between them
    return <div>{ this.state.value }</div>;
  }
}
