import React, { Component } from 'react';

class Button3 extends Component {
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
        <button className="btn-gradient red green large " onClick = {()=> this.setState({counter: this.state.counter +1 })  } >THREE</button>
      </div>
    );
  }
}


export default Button3