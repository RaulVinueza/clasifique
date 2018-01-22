import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Router } from 'react-router-dom'
import store from './store'
import Main from './components/Main.jsx'
import Gameplay from './components/Gameplay.jsx'
import LandingPage from './components/LandingPage.jsx'
import Ending from './components/ending.jsx'
import history from './history'


class Routes extends Component {

  render() {
    return (
      <Router history={history}>
        <Main>
          <Switch>
          <Route
              component={LandingPage}
              exact
              path="/landing-page"
            /> 

            <Route
              component={Gameplay}
              exact
              path="/"
            />

             <Route
              exact
              path="/ending"
              component={Ending}
            />
          </Switch>
        </Main>
      </Router>
    )
  }
}

const mapState = state => ({})

export default connect(mapState)(Routes)
