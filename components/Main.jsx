import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, NavLink} from 'react-router-dom'
import options from '../options'
import {Graph3d} from 'vis'
import slider from '../slider'

let graph3d

class Main extends Component {
    constructor(){
        super()
    }

    componentDidMount(){
        slider()
        const container = document.getElementById('graph')
        graph3d = new Graph3d(container, [{x:0,y:0, z:0, style: 0}], options)
    }

    render(){
        return (<div >
            {this.props.children}
           </div>)
    }
    
}

const mapState = state => ({})

const mapDispatch = dispatch => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Main))
export {graph3d}
