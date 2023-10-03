import React from 'react'

type Props = {
    testClicked: boolean,
    setButtonClicked: ()=>void,
    fadeBackground: ()=>void,
}

export const Navigation = (props: Props) => {

const slideBladesUp = () => {

}





  return (
    <div className="full-container">
        <div className='navigation'>
            <div className={`block block1 ${props.testClicked ? 'block1-down' : 'block1-up'}`}></div>
            <div className={`block block2 ${props.testClicked ? 'block2-down' : 'block2-up'}`}></div>
            <div className={`block block3 ${props.testClicked ? 'block3-down' : 'block3-up'}`}></div>
            <div className={`block block4 ${props.testClicked ? 'block4-down' : 'block4-up'}`}>

        <div className={`nav-menu ${props.testClicked ? 'nav-menu-down' : 'nav-menu-up'}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#creator">Developer</a></li>
          </ul>
        </div>
            </div>
            
            <nav className='navbar'>
            <header className={`${!props.testClicked ? 'header-border' : ''}`}>
            <button onClick={props.setButtonClicked} className='block-button'><i className="fa-solid fa-bars"></i></button>
          <h1>Noblett’s</h1>
          <h2>
            <span className='sp-1'>S</span> 
            <span>&</span> 
            <span className='sp-2'>E</span>
            </h2>

        </header>
            </nav>
        </div>
    </div>
    
  )
}
