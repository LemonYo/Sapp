import React from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import { Layout, Menu, Icon, Tooltip, Badge, Avatar } from 'antd'
const { Header, Sider, Content, Footer } = Layout

class MainLayout extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      collapsed: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle (e) {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render () {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          width='256'>
          <div className='main-sider-menu-logo'>
            <img src='/public/images/favicon.png' />
            {!this.state.collapsed && <h1>省心宝科技</h1>}
          </div>
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key='1'>
              <Icon type='user' />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key='2'>
              <Icon type='video-camera' />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key='3'>
              <Icon type='upload' />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0, boxShadow: 'rgba(0, 21, 41, 0.08) 0px 1px 4px'}}>
            <div className='main-sider-header'>
              <div className='trigger-btn' onClick={this.toggle}>
                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
              </div>
              <ul class='main-sider-header-content'>
                <li className='main-sider-header-content-item'>
                  <Tooltip placement='top' title='搜索'>
                    <Icon type='search' />
                  </Tooltip>
                </li>
                <li className='main-sider-header-content-item'>
                  <Tooltip placement='top' title='文档'>
                    <Icon type='question' />
                  </Tooltip>
                </li>
                <li className='main-sider-header-content-item'>
                  <Tooltip placement='top' title='未读消息'>
                    <Badge count='5'>
                      <Icon type='bell' />
                    </Badge>
                  </Tooltip>
                </li>
                <Avatar icon='user' style={{marginRight: 20}} />
              </ul>
            </div>
          </Header>
          <Content></Content>
          <Footer style={{ background: '#fff'}}>
            <div className='main-footer'>
              Copyright 2019 省心宝体验技术部出品
            </div>
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default MainLayout
