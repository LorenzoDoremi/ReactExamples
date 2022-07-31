import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style/index1.css';
/* import App from './App'; */
import Navigation from './modules/navigation';
import Quiz from './Quiz';
import AppChecker from "./Checkerboard"
import Calendar from './Calendar';
import reportWebVitals from './reportWebVitals';
import Opere from './opere';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/">
          
          <Route path="quiz" element={<Quiz />} />
          <Route path="checker" element={<AppChecker />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="opere" element={<Opere />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
