import React from 'react'

const Zaxis = props => {
    return (
        <div>
        <h2>x</h2>
        <select className="ui dropdown">
                <option value="">Feature</option>
                <option value="1">Male</option>
                <option value="0">Female</option>
        </select>
        <h2>h( f(x), g(y) )</h2>
        <select className="ui dropdown">
                <option value="">Transform Feature</option>
                <option value="1">Male</option>
                <option value="0">Female</option>
        </select>
    </div>
    )
}

export default Zaxis
