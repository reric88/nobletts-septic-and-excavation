import React from 'react'

type Props = {
    testClicked: boolean,
    setButtonClicked: ()=>void,
    setCurrentPage: (page:string)=>void
}

export const Navigation = (props: Props) => {

const handleNavClick = (page: string) => {
  props.setCurrentPage(page)
}

  return (
    <>
    <div className="full-container" id='full-container'>
        <div className={`navigation ${!props.testClicked ? 'navigation-fade' : ''}`}>
            <div className={`block block1 ${props.testClicked ? 'block1-down' : 'block1-up'}`}>
              <div className={`nav-menu ${props.testClicked ? 'nav-menu-down' : 'nav-menu-up'}`}>
                <ul>
                  <li onClick={()=>handleNavClick('home')}><a href="#home">Home</a></li>
                  <li onClick={()=>handleNavClick('services')}><a href="#services">Services</a></li>
                  <li onClick={()=>handleNavClick('about')}><a href="#about">About</a></li>
                  <li onClick={()=>handleNavClick('contact')}><a href="#contact">Contact</a></li>
                  <li onClick={()=>handleNavClick('creator')}><a href="#creator">Developer</a></li>
                </ul>
              </div>
            </div>            
            <nav className='navbar'>
            <header className={`${!props.testClicked ? 'header-border' : ''}`}>
              <div className='spacer'></div>
          <h1>Noblett’s Septic & Excavation</h1>
            <button onClick={props.setButtonClicked} className='block-button'><i className="fa-solid fa-bars"></i></button>
        </header>
            </nav>
        </div>
    </div>
    <div className="spacer"></div>
    </>
    
  )
}
