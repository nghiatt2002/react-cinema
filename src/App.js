import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import './assets/style/main.scss'
import Filmsection from './components/FlimSection/FilmSection';
import News from './components/NewsSection/News';
import NewsList from './components/NewsSection/NewsList';
import NewsSection from './components/NewsSection';
function App() {
  return (
    <div className="App">
      <Filmsection />
      {/* <News /> */}
      {/* <NewsList /> */}
      {/* <MovieNews /> */}
      <NewsSection />
    </div>
  );
}

export default App;
