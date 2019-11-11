import React from 'react';
import './App.css';
import Timer from './Time';


const timeMs = 455

function App() {
  return (
    <div className="App">
      <header>
        <Timer ms={timeMs}/>
      </header>
     
    </div>
  );
}

export default App;
