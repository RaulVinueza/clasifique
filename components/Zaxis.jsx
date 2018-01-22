import React, {Component} from 'react'
import {connect} from 'react-redux'
import {changeHActionCreator} from '../reducer'
import {stateToChart} from '../helperFunctions'
import {graph3d} from './Main.jsx'

class Xaxis extends Component {
    render(){

        const container = document.getElementById('graph')
        stateToChart(this.props.state, graph3d, container)

    return (
        <div className="feature-interface">
       
        
        <select
            id="zFunc"
            className="classy-select"
            onChange={evt => {
                console.log('other click')
                this.props.handleClick(evt.target.value)
                
            }}
        >
                <option value="">Make Stuff Float: h(f(x), g(y)</option>
                <option value="tunnelAlongY">Tunnel Along Y Axis</option>
        </select>
    </div>
    )
    }
}

const mapState = state => ({
   state
})

const mapDispatch = dispatch => {
    return {
      handleClick (keyString) {
        dispatch(changeHActionCreator(keyString))
      },
      
    }
  }

export default connect(mapState, mapDispatch)(Xaxis)

