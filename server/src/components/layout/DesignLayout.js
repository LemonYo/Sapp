import React from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
const { Header, Footer, Content } = Layout
import Application from '../../views/application/Index'

class DesignLayout extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }

  toggle () {
    return () => {
      this.setState({
        collapsed: !this.state.collapsed
      })
    }
  }

  render () {
    return (
      <Layout style={{minWidth: 960}}>
        <div className='main-layout-content'>
          <div className='main-header'>
            <Header>
              Header
            </Header>
          </div>
          <div className='main-layout-iframe'>
            <Switch>
              <Route path={`${this.props.match.url}/app`} component={Application}></Route>
            </Switch>
          </div>
        </div>
      </Layout>
    )
  }
}

export default DesignLayout
