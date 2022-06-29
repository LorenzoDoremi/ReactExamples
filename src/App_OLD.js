import logo from "./logo.svg";
import "./App.css";
import List from "./List.js";
import { useState } from "react";
function App() {
  const [i, setLast] = useState(0);
  const [l, setList] = useState([]);
  return (
    <>
      <List l={l} length={10} />

      <button
        onClick={() => {
          setList((l) => [...l, i]);
          
          console.log(i);
          setLast(i+1);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          setList((l) => l.slice(0,i-1));
          setLast(i-1);
        
        }}
      >
        Remove
      </button>
    </>
  );
}

export default App;
