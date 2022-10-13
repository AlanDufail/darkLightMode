import { Component } from "react";


class Exemple2 extends Component {
  constructor() {
    super();
    this.state = {
      horloge: new Date(),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      horloge: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h2>L'horloge</h2>
        <p>{this.state.horloge.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Exemple2;
