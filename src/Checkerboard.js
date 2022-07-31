import logo from "./logo.svg";
import "./style/App.css";
import List from "./List.js";
import Calendar from "./Calendar.js";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
function Checkerboard({ size, width, height }) {
  const num = parseInt(
    (((90 * width) / 100 / size) * ((90 * height) / 100)) / size
  );
  return (
    <div>
      {[...Array(num)].map((e, i) => {
        return <Checker i={i} />;
      })}
    </div>
  );
}
function Checker({ i }) {
  const [clicked, setClick] = useState(false);
  return (
    <div
      onMouseOver={() => {
        setClick(!clicked);
      }}
      class={clicked ? "checker clicked" : "checker"}
    >
    
    </div>
  );
}
function AppChecker() {
  const [loaded, setLoad] = useState(false);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    setHeight(ref.current.clientHeight);
    setWidth(ref.current.clientWidth);
    setLoad(true);
  });

  return (
    <div ref={ref} id="board">
      {loaded ? (
        <Checkerboard size={10} width={width} height={height} />
      ) : (
        <span>Loading</span>
      )}
    </div>
  );
}

export default AppChecker;
