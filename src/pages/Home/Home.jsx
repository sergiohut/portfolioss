import "./Home.css"

import { useEffect } from "react"
import { Link } from "react-scroll"

import coding from "./../../assets/Hero Retro Coding.jpg"

import contact_icon from "./../../assets/icons/contact-papperplane.svg"
import portfolio_icon from "./../../assets/icons/code-square-svgrepo-com.svg"


import Sticky_Contact from "../../components/Sticky_Contact/Sticky_Contact"
import Chevron from "../../components/Chevron/Chevron"
import Slider from "./../../components/Slider/Slider"


import {sliderContent} from "./../../data/slider_content"


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });


  return (
    <>
    <main className='hero slide-topg' > 

    <div className='hero_info'>
      <p>Bienvenidx. Supongo que si has llegado hasta aquí será porque necesitas un desarrollador web fullstack. O quizás simplemente querías curiosear, echarle un vistazo a mis trabajos y conocerme un poco más. <br/><br/>En cualquier caso espero que encuentres lo que buscas. </p>
      <div className='hero_btns'>
        <a href='mailto:sergiosantiagocarmona@gmail.es'>
          <button className='contactBtn'>Hablemos <img className='icon' src={contact_icon} alt="icono contacto"/></button>
        </a>          
        <Link className="projectBtn" to="projects" activeClass="active" smooth spy duration={2000}> 
          <button>Proyectos<img className='icon' src={portfolio_icon} alt="icono portfolio"/></button>
        </Link>
      </div>
    </div>


    <img className='hero_image' src={coding} alt='View of the computer center the IBM newly installed'></img>

     </main>
     <Slider items={sliderContent}/>
     <Sticky_Contact/>
     <Chevron/>


     </>
  )
}

export default Home