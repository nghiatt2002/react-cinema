import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import './assets/style/main.scss'
import NowShowingFlimList from './components/NowShowing/NowShowingFlimList';
import CommingSoonFilmSlider from './components/CommingSoon/CommingSoonFilmSlider/CommingSoonFilmSlider';

function App() {
  return (
    <div className="App">
      <NowShowingFlimList />
      <CommingSoonFilmSlider />
    </div>
  );
}

export default App;
