import React, { Component } from 'react';
//import MyComponent from './MyComponent';
//import MyClassComponent from './MyClassComponent';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <>
        {/*       
        <MyComponent name={'react'} favoriteNumber={7}>
          {'3'}
        </MyComponent>
        <br />

        <MyClassComponent></MyClassComponent>
        */}

        <Counter></Counter>
      </>
    );
  }
}

export default App;
