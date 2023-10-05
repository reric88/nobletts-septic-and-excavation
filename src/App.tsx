import React, { CSSProperties, useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Navigation } from './components/Navigation';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Creator } from './components/Creator';
import { Services } from './components/Services';
import { Error } from './components/Error';
// import { setTimeout } from 'timers/promises';

function App() {
  const [testClicked, setTestClicked] = useState(true);
  const [currentPage, setCurrentPage] = useState('contact')

const backgrounds = {
  skidsteer: '/src/images/samuel-cruz-TPD1WXQIfzc-unsplash.jpg',
  gravel: '/src/images/nadin-mario-_OUi6HxZ8aY-unsplash.jpg',
  excavator: '/src/images/sitraka-tDxAniAxjYk-unsplash.jpg',
  calendar: '/src/images/eric-rothermel-FoKO4DpXamQ-unsplash.jpg',
  code: '/src/images/safar-safarov-koOdUvfGr4c-unsplash.jpg',
  phone: '/src/images/miryam-leon-Jdpvhn6xA0w-unsplash.jpg'
}

let bgTimer = false;

  const setButtonClicked = () => {
    setTestClicked((prev)=>!prev);
    // fadeBackground()
  };

  const handleSetPage = (page: string) => {
    setCurrentPage(page)
    setButtonClicked()
  }

  // const fadeBackground = () => {
  //   const mainPage = document.getElementById('full-container')
  //   if (testClicked){
  //     mainPage?.classList.add('fade-background')
  //   } else {
  //     mainPage?.classList.remove('fade-background')
  //   }
  // }

  // const changeBackground = () => {
  //   const background = document.getElementById('main-background');
  //   background?.className = 'main-background'
  //   if (currentPage === 'home'){
  //     background?.classList.add('skidsteer')
  //   } else if (currentPage === 'about'){
  //     return background?.classList.add('gravel')
  //   } else if (currentPage === 'services'){
  //     return backgrounds.calendar
  //   } else if (currentPage === 'creator'){
  //     return backgrounds.code
  //   } else if (currentPage === 'contact'){
  //     return backgrounds.phone
  //   }
  // }

  // const changeBackground = (bg: string) => {
  //   return backgrounds[bg] || backgrounds.skidsteer; // Use a default background if undefined
  // };

 const displayCurrentPage = () => {
  if (currentPage === 'home'){
    return <Home />
  } else if (currentPage === 'about'){
    return <About />
  } else if (currentPage === 'contact'){
    return <Contact />
  } else if (currentPage === 'services'){
    return <Services />
  } else if (currentPage === 'creator'){
    return <Creator />
  } else return <Error />
 }

 const bgTimeout = () => {
  

 }

useEffect(() => {
  if (bgTimer === false){
    bgTimer = true
    setTimeout(()=>{
      bgTimer = false
    }, 500)
  }

}, [currentPage])






  return (<>
    <div className="main" id='main-page'>
      
      <Navigation setCurrentPage={handleSetPage} testClicked={testClicked} setButtonClicked={setButtonClicked} />
      <div className=
      {`main-background 
      ${testClicked ? '' : 'fade-background'} 
      ${currentPage === 'home' ? 'skidsteer' : currentPage === 'contact' ? 'phone' : currentPage === 'services' ? 'calendar' : currentPage === 'about' ? 'gravel' : currentPage === 'creator' ? 'code' : ''}
      `} id='main-background'></div>
      {displayCurrentPage()}
    </div>
    </>
  );
}

export default App;
