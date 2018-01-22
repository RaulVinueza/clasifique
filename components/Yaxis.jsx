import React, {Component} from 'react'
import {connect} from 'react-redux'
import {changeYActionCreator, changeGActionCreator} from '../reducer'
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
            onChange={evt => {
                this.props.handleClick(evt.target.value)
                
            }}
        >
        <option value="">Choose Feature: y</option>
                <option value="allegiance">Allegiance</option>
                
        </select>
        
        <select 
            className="classy-select"
            onChange={evt => {
                console.log('other click')
                this.props.handleOtherClick(evt.target.value)
                
            }}
        >
                <option value="">Modify Feature: g(y)</option>
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
        dispatch(changeYActionCreator(keyString))
      },
      handleOtherClick(keyString) {
        dispatch(changeGActionCreator(keyString))
      }
    }
  }

export default connect(mapState, mapDispatch)(Xaxis)

