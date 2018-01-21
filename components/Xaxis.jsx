import React from 'react'

const Xaxis = props => {
    return (
        <div>
        <h2>x</h2>
        <select className="ui dropdown">
                <option value="">Feature</option>
                <option value="1">Male</option>
                <option value="0">Female</option>
        </select>
        <h2>f(x)</h2>
        <select className="ui dropdown">
                <option value="">Transform Feature</option>
                <option value="1">Male</option>
                <option value="0">Female</option>
        </select>
    </div>
    )
}

export default Xaxis
