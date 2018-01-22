import React, {Component} from 'react'
import {connect} from 'react-redux'
import {changeXActionCreator} from '../reducer'
import {stateToChart} from '../helperFunctions'
import {graph3d} from './Main.jsx'

class Xaxis extends Component {
    render(){

        const container = document.getElementById('graph')
        stateToChart(this.props.state, graph3d, container)

    return (
        <div className="feature-interface">
        <select 
            className="classy-select"
            id="xFeature"
            onChange={evt => {
                this.props.handleClick(evt.target.value)
                
            }}
        >
        <option value="">Choose Feature: x</option>
                <option value="allegiance">Allegiance</option>
                
        </select>
        
        <select className="classy-select" id="xFunc">
                <option value="">Modify Feature: f(x)</option>
                <option value="sadParabola">Sad Parabola</option>
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
        dispatch(changeXActionCreator(keyString))
      }
    }
  }

export default connect(mapState, mapDispatch)(Xaxis)
