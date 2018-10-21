import React, { Component } from "react";
import "./App.css";
import Button1 from "./components/button-1";
import Button2 from "./components/button-2";
import Button3 from "./components/button-3";

class App extends Component {
  render() {
    return (
      <div>
        <Button1 />
        <Button2 />
        <Button3 />
      </div>
    );
  }
}

export default App;
