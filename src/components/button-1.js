import React, { Component } from 'react';

class Button1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  render() {
    return (
      <div>
        <h3>count: {this.state.counter}</h3>
        <button className="btn-gradient red large" onClick = {()=> this.setState({counter: this.state.counter +1 })  } >ONE</button>
      </div>
    );
  }
}


export default Button1