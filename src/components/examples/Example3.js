import { Component } from "react";
import { Button } from "react-bootstrap";


class Example3 extends Component {
  constructor() {
    super();
    this.state = {
      isToggle: true,
    };
  }

  handleClick() {
    const btn = document.querySelector('#btn');
    const styleRed = document.createElement('style');
    const styleGreen = document.createElement('style');
    styleGreen.innerHTML = 'background-color: green';
    styleRed.innerHTML = 'background-color: red';
    window.appendChild(styleGreen);
    window.appendChild(styleRed);

    this.setState({
      isToggle: !this.state.isToggle,
    });
    if(this.state.isToggle == true){
        btn.classList.add(styleGreen);
    }
  }

  render() {
    return (
      <div>
        <h2>Le toggle !</h2>
        <Button id='btn' variant="primary" onClick={() => this.handleClick()}>
          {this.state.isToggle ? "On" : "Off"}
        </Button>
      </div>
    );
  }
}

export default Example3;
