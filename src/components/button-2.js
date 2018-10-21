import React, { Component } from 'react';

class Button2 extends Component {
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
        <button className="btn-gradient blue large" onClick = {()=> this.setState({counter: this.state.counter +1 })  } >TWO</button>
      </div>
    );
  }
}


export default Button2