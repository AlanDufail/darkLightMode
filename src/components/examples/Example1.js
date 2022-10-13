import { Component } from "react";
import { Button } from "react-bootstrap";


class Example1 extends Component {
  constructor() {
    super();
    this.state = {
      compteur: 0,
    };
  }

  increment() {
    const rand = Math.floor((Math.random()*100)) + ' %';

    this.setState({
        compteur: rand 
    })

  }

  render() {
    return (
      <div>
        <h2>Salut  tu veux savoir si tu es un beau gosse ?? <br></br> Clique sur le bouton !</h2>
        <p>{this.state.compteur}</p>
        <Button variant="primary" onClick={ () => this.increment() }>Clickez</Button>
      </div>
    );
  }
}

export default Example1;
