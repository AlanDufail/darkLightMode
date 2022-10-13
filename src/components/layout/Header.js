import Navbar from "react-bootstrap/Navbar";
import logo from "../../../src/logo.svg";

function Header() {
  return (
    <Navbar className="App-header">
      <Navbar.Brand href="#home">Cours de React</Navbar.Brand>
      <img src={logo} className="App-logo" alt="logo" />
    </Navbar>
  );
}

export default Header;
