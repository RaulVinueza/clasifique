import React from 'react'
import Xaxis from './Xaxis.jsx'
import Yaxis from './Yaxis.jsx'
import Zaxis from './Zaxis.jsx'

const Gameplay = props => {
    return (
    <div>
        <div id="graph"></div>
        <div className="overlay">
        <div className="title-div">
        <svg viewBox="0 0 60 60">
  <defs>
    <linearGradient id="rainbow" x1="0" x2="100%" y1="0" y2="0" gradientUnits="userSpaceOnUse" >
      <stop stop-color="#3b70e3" offset="0%"/>
      <stop stop-color="#623be3" offset="50%"/>
    </linearGradient>
  </defs>
    <text fill="url(#rainbow)" text-anchor="middle">
      <tspan 
        font-size="4rem" 
        x="0" 
        y="45">
        Clasifique
      </tspan>
    </text>
</svg>
            {/* <h1 className="title">Clasifique</h1> */}
        </div>
            <div className="ui grid">
                <div className="four wide column ">
                <Xaxis />
                <Yaxis />
                <Zaxis />
                </div>
                <div className="eight wide column ">
                </div>
                <div className="four wide column slider-column">
                <input type="range" min="-100" max="0" value="0" className="range blue"/>
                    <button
                        type="button"
                        className="classify-button"
                    >
                        Classify
                    </button>
                </div>
            </div> 
        </div>
    </div>
    )
}

export default Gameplay
