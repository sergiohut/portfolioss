import './Slider.css';

import { useState} from 'react';

import CardProject from "./../CardProject/CardProject"
import arrow from "./../../assets/icons/109609.png"


const Slider = ({ items }) => {
  const [index, setIndex] = useState(0);

  const previous = () =>{
    const nextIndex = index > 0 ? index - 1 : items.length -1;
    setIndex(nextIndex); 
  };

  const next = () => {
    const nextIndex = index < items.length - 1 ? index + 1 : 0;
    setIndex(nextIndex)
  }

  return (
    <section className="slider" id='proyectos'>
         <h2> Proyectos</h2>
      <div className="slider_wrapper"
      style={{ transform: `translate(${-index * 100}%, 0)` }}
      >        
 
        {items.map((item) => (
          <CardProject key={item.id} item={item}/>
        ))}
      </div>

      <img className="arrows back" src={arrow} onClick={previous}/>
      <img className='arrows next' src={arrow} onClick={next}/>
    </section>

  );
};

export default Slider;
