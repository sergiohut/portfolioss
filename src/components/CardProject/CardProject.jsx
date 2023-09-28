import Player from "./../../components/Player/Player"
import { useState, useRef} from 'react';
import "./CardProject.css"
const CardProject = ({item}) => {



    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
  
    
    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

  return (
<div id='projects' className="slider_card">
    <div className='projects'>

      <div className='project_main'>
        <div className="project_video">
        <Player  video={item.video} reference={videoRef}/>
        </div>

        <section className='project_info'> 
        <h1> {item.title}</h1>
        <p >{item.description}</p>
{/*        <button onClick={togglePlay}>
                {isPlaying ? "Pause" : "Play"}
            </button>*/}
            <div>
        <a className="anchor" href={item.front} target="_blank">Repositorio Front</a><br></br>
        {item.back? <a className="anchor" href={item.back} target="_blank">Repositorio Back</a> : ""}</div>


        </section>


        </div>
        <span className='dividerH'></span>
    </div>
</div>
  )
}

export default CardProject