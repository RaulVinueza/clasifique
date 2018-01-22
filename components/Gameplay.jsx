import React from 'react'
import Xaxis from './Xaxis.jsx'
import Yaxis from './Yaxis.jsx'
import Zaxis from './Zaxis.jsx'

const Gameplay = props => {
    return (
    <div>
        <div id="graph"></div>
        <div className="overlay ui grid">
            <div className="four wide grid">
            </div>
            <div className="eight wide grid">
            </div>
            <div className="four wide grid">
                <button
                    type="button"
                    className="classify-button"
                >
                    CLASSIFY!
                </button>
            </div>
                
        </div>
    </div>
    )
}

export default Gameplay
