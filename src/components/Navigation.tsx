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
            
            <nav className='navbar'>
            <header className={`${!props.testClicked ? 'header-border' : ''}`}>
            <button onClick={props.setButtonClicked} className='block-button'><i className="fa-solid fa-bars"></i></button>
          <h1>Noblett’s Septic & Excavating</h1>
        </header>
            </nav>
        </div>
    </div>
    
  )
}
