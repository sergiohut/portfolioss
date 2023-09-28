import "./Player.css"
import { useState, useRef } from 'react';

const Player = ({video, reference}) => {

    return (
        <div>
            <video   ref={reference} width="100%" height="auto" controls muted>
                <source src={video} type="video/mp4" />
            </video>


        </div>
    )
}

export default Player;