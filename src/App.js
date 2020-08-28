import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ListCinema from './components/ListCinema/';
// import ListCinema from './components/ListCinema2/ListCinema';

function App() {
  return (
    <div className="App">
      <ListCinema />
    </div>
  );
}

export default App;
