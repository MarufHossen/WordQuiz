import React from 'react'
import './HowToPlay.css'
import {Link} from 'react-router-dom';
function HowToPlay() {
    return (
        <div className="container">
            <h2 className="h2">How To Play!</h2>
            <div className="box">
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, labore.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                </ul>
                <Link to="/countdown-1">
                    <button className="play-btn">Play</button>
                </Link>
            </div>
        </div>
    )
}

export default HowToPlay
