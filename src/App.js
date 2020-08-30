import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import './assets/style/main.scss'
import Filmsection from './components/FlimSection/FilmSection';
function App() {

  let [state, setState] = useState({
    url: ''
  });
  let url = '';

  let showPopup = () => {
    url = 'https://www.youtube.com/embed/Nn-8OqGdgrA';
    setState({
      url: 'https://www.youtube.com/embed/Nn-8OqGdgrA'
    })
  }
  return (
    <div className="App">
      <Filmsection />
    </div>
  );
}

export default App;
