import "./Footer.css"

import { NavLink } from "react-router-dom"
import CV from "./../../assets/CV 2023 Sergio Santiago Carmona.pdf"

const Footer = () => {
  return (
    <>
    <footer>
    <p>© 2023 Sergio Santiago Carmona</p>
    <div>
    <ul className="footer_menu">
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/about">Acerca de mí</NavLink>
        </li>
        </ul>
    </div>
 

    <div className='footer_social'>
        <a href='https://github.com/sergiohut' target="_blank">Github</a>
        <a href='https://www.linkedin.com/in/sergiosantiagocarmona/' target="_blank">Linkedn</a>
        <a href={CV} target="_blank">
        <p>Curriculum</p></a>
    </div>

    </footer>
    </>
  )
}

export default Footer