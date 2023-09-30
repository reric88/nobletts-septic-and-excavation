import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Navigation } from './components/Navigation';

function App() {
  const [testClicked, setTestClicked] = useState(true);




  const setButtonClicked = () => {
    setTestClicked((prev)=>!prev);
    fadeBackground()
  };

  const fadeBackground = () => {
    const mainPage = document.getElementById('main-background')
    if (testClicked){
      mainPage?.classList.add('fade-background')
    } else {
      mainPage?.classList.remove('fade-background')
    }
  }

 





  return (<>
    <div className="main" id='main-page'>
      <Navigation fadeBackground={()=>fadeBackground()} testClicked={testClicked} setButtonClicked={setButtonClicked} />
      <Home />
      <div className='main-background' id='main-background'></div>
    </div>
    </>
  );
}

export default App;
