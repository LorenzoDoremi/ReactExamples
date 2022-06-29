import React, { useState } from "react";
import "./quiz.css";
function Quiz() {
  const [end, setEnd] = useState(false);
  const [results, updateResults] = useState({
    pigro: 0,
    metodico: 0,
    creativo: 0,
    dinamico: 0,
   
  })
  

  function handleResults(t) {
    

    updateResults(t)
    setEnd(!end)

  }


 

  var domande = [
    { testo: "ti piace Python?", chiave: "pigro", subchiave: "dinamico" },
    { testo: "ti piace Java?", chiave: "metodico",  subchiave: "creativo" },
    { testo: "Hai mai programmato con Canvas?", chiave: "creativo",  subchiave: "metodico" },
    { testo: "Ti piace cambiare linguaggi?", chiave: "dinamico",  subchiave: "pigro" },
    { testo: "Ti piace il typing dinamico?", chiave: "pigro",  subchiave: "metodico" },
    { testo: "ti piace Processing?", chiave: "creativo",  subchiave: "metodico" },
    { testo: "Preferisco le classi alle funzioni", chiave: "metodico",  subchiave: "dinamico" },
    { testo: "Preferisco cambiare framework in base al progetto", chiave: "dinamico",  subchiave: "pigro" },

  ];

  function plot(end) {
   
      return (
        <div id="results">
          <p>I RISULTATI!</p>
          <p style={{color: results.pigro > 0 ? "white": "black"}}><div style={{width: results.pigro > 0 ? results.pigro*50 : 0 }}/>PIGRO: {(results.pigro*10)}%</p>
          <p style={{color: results.metodico > 0 ? "white": "black"}}><div style={{width: results.metodico > 0 ? results.metodico*50 : 0 }}/>Metodico: {(results.metodico*10)}%</p>
          <p style={{color: results.creativo > 0 ? "white": "black"}}><div style={{width:  results.creativo > 0 ? results.creativo*50 : 0 }}/>Creativo: {(results.creativo*10)}%</p>
          <p style={{color: results.dinamico > 0 ? "white": "black"}}><div style={{width: results.dinamico > 0 ? results.dinamico*50: 0 }}/>Dinamico: {(results.dinamico*10)}%</p>
         
        </div>
      );
   
  }

  function handleEnd() {
    setEnd(!end);
  }

  return (
    <>
    <div id="left">
      <div id="quiz"> <h1>Che programmatore sei? </h1></div>
       {console.log("render!")}
      {domande.map((item, index) => {
        return (
          <Question
            testo={item.testo}
            chiave={item.chiave}
            subchiave={item.subchiave}
            id={index}
            results={results}
            update={handleResults}

          />
        );
      })}

      <button
        onClick={() => {
          handleEnd();
        }}
      >
        {" "}
        Scopri risultato
      </button>
      </div>
      <div id="right">
      {plot(end)}
      </div>
      </>
   
  );
}

function Question({ testo, chiave, subchiave, id, results, update }) {
  const [value, setValue] = useState(0);

  function handleClick(new_value) {

    var temp = results;
    temp[chiave] += (new_value - value)
    temp[subchiave] -= (new_value - value)
    update(temp);
    setValue(new_value);
  }
  return (
    <div class="q">
      <div class="question">{testo}</div>
      <form class="question-form">
        <input
          name={id}
          type="radio"
          onClick={() => {
            handleClick(1);
          }}
          value="0"
        />
        <input
          name={id}
          type="radio"
          onClick={() => {
            handleClick(2);
          }}
          value="1"
        />
        <input
          name={id}
          type="radio"
          onClick={() => {
            handleClick(3);
          }}
          value="2"
        />
        <input
          name={id}
          type="radio"
          onClick={() => {
            handleClick(4);
          }}
          value="3"
        />
        <input
          name={id}
          type="radio"
          onClick={() => {
            handleClick(5);
          }}
          value="4"
        />
      </form>
    </div>
  );
}

export default Quiz;
