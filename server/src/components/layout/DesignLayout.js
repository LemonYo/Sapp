import React from 'react'
import { Layout, Menu, Icon } from 'antd'
const { Header, Footer, Content } = Layout

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
      <Layout>
        <Header>
          header
        </Header>
        <Content>
          main content
        </Content>
        <Footer>
          footer
        </Footer>
      </Layout>
    )
  }
}

export default DesignLayout
