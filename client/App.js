import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import Index from './src/views/index/Index.js'
import About from './src/views/about/About.js'

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
          <Route path="/about" component={About}></Route>
        </Switch>
      </Router>
    )
  }
}

export default hot(App)