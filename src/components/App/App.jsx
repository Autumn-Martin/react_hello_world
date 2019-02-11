import React, { Component } from 'react';
import Counter from '../Counter/Counter';
import HelloWorld from '../HelloWorld/HelloWorld';

export default class App extends Component{
  render() {
    return (
      <div>
        <HelloWorld/>
        <Counter/>
      </div>
    )
  }
}
