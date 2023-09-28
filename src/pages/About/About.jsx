import "./About.css"

import Portrait from "../../assets/1678183992562.jpg"
import social_ilustration from "./../../assets/mano y movil_Mesa de trabajo 1.png"
import star from "./../../assets/imagotipo.png"

import githubIcon from "./../../assets/icons/icons8-github-60.png"
import linkednIcon from "./../../assets/icons/icons8-linkedin-50.png"
import HTMLIcon from"./../../assets/icons/HTML5.png"
import CSSIcon from"./../../assets/icons/5968242.png"
import JavaScriptIcon from"./../../assets/icons/Javascript logo.png"
import TypeScriptIcon from"./../../assets/icons/Typescript.png"
import ReactIcon from"./../../assets/icons/React.webp"
import NodeJSIcon from"./../../assets/icons/nodejs-development-services.webp"
import MongoDBIcon from"./../../assets/icons/MongoDB-Logo.png"
import gitIcon from"./../../assets/icons/git.png"
import cvIcon from "./../../assets/icons/6721017.png"
import contactIcon from "./../../assets/icons/contact-papperplane.svg"

const About = () => {
  return (
    <>

    <main className='about'>      
      <section className='about_box'>
        <div className='about_bio'> 
          <div className='about_portrait'>
            <img className='portrait_img' src={Portrait}/>
            <button className="contactBtn CV">Curriculum<img className='icon' src={cvIcon}/></button>
          </div>
          <div className='about_info'>
            <h2> Hola!</h2>
            <p> 
            Soy <span className='bold_blue'>Sergio Santiago</span>, <span className='bold'>desarrollador web fullstack (MERN).</span> <br/><br/>
            Formado previamente en  <span className='bold'>Publicidad y Marketing Digital</span>. Desde cuya perspectiva, he sido capaz de explorar el potencial de los medios digitales como valiosas herramientas de comunicación corporativa. <br/><br/>
            Mi experiencia profesional, orientada a la <span className='bold'>atención al cliente y el soporte técnico de plataformas digitales</span>, me ha permitido también ponerme en el lugar del usuario.
            </p>
          </div>
        </div>

        <div className='about_skills'>
          <h2> Stack: </h2>
          <div className='skills'>
            <img className='icon2' src={HTMLIcon}/>
            <img className='icon2' src={CSSIcon}/>
            <img className='icon2' src={JavaScriptIcon}/>
            <img className='icon5' src={TypeScriptIcon}/>
            <img className='icon5' src={ReactIcon}/>
            <img className='icon5' src={gitIcon}/>
            <img className='icon5' src={NodeJSIcon}/>
            <img className='icon4' src={MongoDBIcon}/>
          </div>
        </div>
      </section>

      <span className='dividerH2'></span>

      <section className='about_social'>            
        <div className='social'>
          <p>Date una vuelta por mis RRSS</p>
          <div>
            <a href='https://github.com/sergiohut' target="_blank"><img src={githubIcon} className='icon3'/></a>
            <a href='https://www.linkedin.com/in/sergiosantiagocarmona/' target="_blank"><img src={linkednIcon} className='icon3'/></a>
          </div>
        </div>
          <div className='animationPhone'>
            <img src={social_ilustration} className='social_ilustration'/>
            <img className='animated_star' src={star}/>
          </div>
     </section>
 </main>

 <a href='mailto:sergiosantiagocarmona@gmail.es'>
    <span className="contacto">
      <img src={contactIcon}/>
      <p>Hablemos</p>
    </span></a>

</>

  )
}

export default About