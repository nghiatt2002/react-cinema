import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Film from './components/FilmSection/Film';
import './assets/style/main.scss'

function App() {
  return (
    <div className="App">
      <Film />
    </div>
  );
}

export default App;
