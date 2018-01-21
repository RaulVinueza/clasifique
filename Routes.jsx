import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Router } from 'react-router-dom'
import history from './history'
import store from './store'


class Routes extends Component {

  render() {
    return (
      <Router history={history}>
        <Main>
          <Switch>
          <Route
              component={LandingPage}
              exact
              path="/"
            />

            <Route
              component={Gameplay}
              exact
              nextProp="hello"
              path="/gameplay/:level"
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
