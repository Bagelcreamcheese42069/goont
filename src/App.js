import React from 'react';
import './App.css';
import babygoont from './Assets/babygoont.webp';

function App() {
  return (
    <div className="App">
      <button id = "button1"> CLICK IF ZORTING IT!!!!!! </button>
      <p id = "number" >Current number of zorters: <span id="number">0</span></p>
      <h1>I'm zorting it!!!!</h1>
      <img src ={babygoont} alt="baby goont" />
      <script src = "script.js"></script>
    </div>
    );
}
export default App;
  

