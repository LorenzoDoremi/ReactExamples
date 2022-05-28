import logo from "./logo.svg";
import "./App.css";
import List from "./List.js";
import { useState } from "react";
import { useEffect } from "react";
const months = [
  { day: "JAN", n: 31 },
  { day: "FEB", n: 28 },
  { day: "MAR", n: 31 },
  { day: "APR", n: 30 },
  { day: "MAY", n: 31 },
  { day: "JUN", n: 30 },
  { day: "JUL", n: 31 },
  { day: "AUG", n: 31 },
  { day: "SEP", n: 30 },
  { day: "OCT", n: 31 },
  { day: "NOV", n: 30 },
  { day: "DEC", n: 31 },
];
const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const s = true;
function Calendar() {

  // memoria del mese attuale
  const [currm, addM] = useState(0);

  // calcolatore giorni del mese attuale  
  var cdays = [];

  // giorni passati dal primo giorno
  var passed = 0;
  
  // valore alias utilizzato per il primo avvio 
  var currmonth = 0;

  currm ? (currmonth = currm) : (currmonth = 0);
  for (var i = 0; i < months[currmonth].n; i++) {
    cdays.push(0);
  }
  for (var j = 0; j < currmonth; j++) {
    passed += months[j].n;
  }

  return (
    <>
      <h1>{months[currmonth].day + " " + months[currmonth].n}</h1>
      <button onClick={handleClick}> NEXT</button>
      <div className="month">
        {cdays.map((v, index) => {
          return <Day day={index + passed} i={index} />;
        })}

      
      </div>
    </>
  );

  function handleClick() {
  
    addM((currm + 1)%12);
  }
}

function Day({ day, i }) {
  return (
    <div className={day%7 == 6 ? "sun day": "day"}>
      <span>
        <span>{i + 1}</span>
        <span>{"" + days[day % 7]}</span>
      </span>
    </div>
  );
}

export default App;
