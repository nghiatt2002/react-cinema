import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <h1>Hello</h1>
        <div className="left">
                        <h2>HEADER H2</h2>
                    </div>
      </div>
      <div className="left">
                        <h2>HEADER H2</h2>
                    </div>
    </div>
  );
}

export default App;
