import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import Index from './src/views/index/Index.js'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/index" component={Index}></Route>
        </Switch>
      </Router>
    )
  }
}

export default hot(App)