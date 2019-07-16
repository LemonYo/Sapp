import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import './app.scss'
import MainLayout from './src/components/layout/MainLayout'
import DesignLayout from './src/components/layout/DesignLayout'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {}

  render () {
    return (
      <div className='main-page'>
        <Router>
          <Switch>
            <Route component={MainLayout} path='/dashboard'></Route>
            <Route path='/design' component={DesignLayout}></Route>
            <Redirect path='/*' to='/dashboard' />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default hot(App)
