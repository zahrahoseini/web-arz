import React from 'react'
import './App.css';
import Body from './Body';
import Header from './Header';

function App() {
  return (
    <div className="App">
        <div className="app_header">
          <Header />
        </div>
      <dive className="app_body">
        <Body />
      </dive>
    </div>
  );
}

export default App;
