import "./Chevron.css"
import { useState, useEffect } from "react";
import {Link} from "react-scroll"
const Chevron = () => {
  const [stickyClass, setStickyClass] = useState('hidden');
  useEffect(() => {
    window.addEventListener('scroll', stickyContact);
    return () => window.removeEventListener('scroll', stickyContact);
  }, []);

  const stickyContact = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150 ? setStickyClass('chevron_container') : setStickyClass('hiddenChev');
    }
  };
  return (
    <Link to="hero" activeClass="active" smooth spy className={stickyClass}>
<div className="chevron-container" >
  <div className="chevron"></div>
  <div className="chevron"></div>
  <div className="chevron"></div>
</div>
</Link>
  )
}

export default Chevron