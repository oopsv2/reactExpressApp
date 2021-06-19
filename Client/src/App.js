import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch("/data")
      .then((res) => res.json())
      .then((customers) => {
        setPeople(customers);
      });
  }, []);
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <ul>
        {people.map((p) => {
          return <li>{p.balance}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
