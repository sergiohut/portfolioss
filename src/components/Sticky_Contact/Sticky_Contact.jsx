import "./Sticky_Contact.css"

import contact_icon from "./../../assets/icons/contact-papperplane.svg"

import { useState, useEffect } from "react";

const Sticky_Contact = () => {

    const [stickyClass, setStickyClass] = useState('hidden');
    useEffect(() => {
      window.addEventListener('scroll', stickyContact);
      return () => window.removeEventListener('scroll', stickyContact);
    }, []);
  
    const stickyContact = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 500 ? setStickyClass('contacto') : setStickyClass('hidden');
      }
    };
  return (
    <a href='mailto:sergiosantiagocarmona@gmail.es'>
    <span className={stickyClass}>
      <img src={contact_icon}/>
      <p>Hablemos!</p>
    </span></a>
  )
}

export default Sticky_Contact