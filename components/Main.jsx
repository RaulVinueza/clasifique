import React from 'react'
import {connect} from 'react-redux'
import {withRouter, NavLink} from 'react-router-dom'

const options = {
    width:  '600px',
    height: '600px',
    style: 'dot-color',
    showPerspective: true,
    showGrid: true,
    showShadow: false,
    keepAspectRatio: false,
    backgroundColor: 'black',
    xMin: 0,
    xMax: 30,
    yMin: 0,
    yMax: 30,
    valueMax: 3,
    verticalRatio: 1.0,
    showLegend: false
  }

const Main = props => {
    
    function drawVisualization() {

 
      const container = document.getElementById('graph')
      graph3d = new vis.Graph3d(container, altData2, options)
    }

    return (<div >
     {props.children}
    </div>)
}

const mapState = state => {
  return {
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Main))
