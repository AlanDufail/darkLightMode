import { createContext, useEffect, useState } from "react";
import "./App.css";
// import ApiExemple from './components/examples/ApiExemple';
import Example1 from "./components/examples/Example1";
import Example2 from "./components/examples/Example2";
import Example3 from "./components/examples/Example3";
import Example4 from "./components/examples/Example4";
import Header from "./components/layout/Header";
import Todo from "./components/TodoList/Todo";
import DarkMode from "./components/Darkmode";

export const darkLightThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("lightMode");

  const toogleDarkLightTheme = () => {
    if (theme == "lightMode") {
      setTheme("darkMode");
    } else {
      setTheme("lightMode");
    }
  };

  useEffect(() => {
    const myBtn = document.querySelector(".button");
    myBtn.addEventListener("change", toogleDarkLightTheme);
  });

  return (
    <darkLightThemeContext.Provider value={{ theme, toogleDarkLightTheme }}>
      <div className="App" id={theme}>
        <Header />
        <DarkMode className="button" />
        <Example1 />
        <Example2 />
        <Example3 />
        <Example4 />
        <Todo />
        {/* <ApiExemple /> */}
      </div>
    </darkLightThemeContext.Provider>
  );
}

export default App;
