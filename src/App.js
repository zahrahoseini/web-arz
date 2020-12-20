import React from 'react'
import './App.css';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <div className="app_header">
          <Header />
        </div>
      <dive className="app_body">
        <Body />
      </dive>
      <dive className="app_footer">
        <Footer />
      </dive>
    </div>
  );
}

export default App;
