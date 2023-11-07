import "./Header.css"

import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'


import logo from "../../assets/Logo Sergio Santiago.png"
import BurgerButton from "./../BurgerButton/BurgerButton"
import CloseButton from "../CloseButton/CloseButton"


const Header = () => {
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 100 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };
    const [clicked, setClicked] = useState(false)

    const handleClick = () =>{
      setClicked(!clicked)
    }



  return (
    <>
    <header className="slide-top">

      <nav className="navbar" id={stickyClass}>
      <div className="navbar_heading">
      
      <NavLink to="/"><img className="heading_logo" src={logo} alt="Sergio Santiago Logo"/></NavLink>
      <NavLink to="/"><h1 className="heading_h1"> Desarrollo Web Fullstack</h1></NavLink>
      </div>
      <ul className='navbar_list'>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/about">Acerca de mí</NavLink>
        </li>
      </ul>
      <div className="navBar_burgerBtn">
         <BurgerButton  handleClick={handleClick}/></div>
      </nav>

      <div className={`burgerMenu ${clicked ? 'active' : '' }`}>
      <nav className="navBar_open">
        <div className="open_header container">
        <NavLink to="/"><img className="heading_logo" src={logo} alt="Sergio Santiago Logo"/></NavLink>
        <CloseButton handleClick={handleClick}/>
        </div>
        <div className="open_menu">
        <ul className='open_list'>
        <li>
        <NavLink onClick={handleClick}  to="/">Inicio</NavLink>
        </li>
        <li> 
        <NavLink onClick={handleClick} to="/about">Acerca de mí</NavLink>
        </li>
        
        <li> <a href='https://github.com/sergiohut' target="_blank"> Github</a></li>
        <li>  <a href='https://www.linkedin.com/in/sergiosantiagocarmona/' target="_blank">LinkedIn</a></li>

      </ul>


      <div>

      </div>
      </div>
       </nav>
       </div>

      
    </header>
    <span className='dividerH slide-top'></span>
</>
  )
}

export default Header