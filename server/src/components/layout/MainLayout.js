import React from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import { Layout, Menu, Icon, Tooltip, Badge, Avatar } from 'antd'
const { Header, Sider, Content, Footer } = Layout
const { SubMenu } = Menu

import DashBoard from '../../views/dashboard'
import Published from '../../views/designed/Published'
import Unpublished from '../../views/designed/Unpublished'
class MainLayout extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      collapsed: false,
      routes: [
        {
          path: '',
          icon: 'dashboard',
          name: '数据总览',
          component: DashBoard
        },
        {
          name: '设计资源',
          icon: 'crown',
          sub: [
            {
              path: '/publish',
              name: '已发布',
              icon: 'fire',
              component: Published
            },
            {
              path: '/unpublish',
              name: '草稿箱',
              icon: 'delete',
              component: Unpublished
            }
          ]
        },
        {
          path: '/monitor',
          icon: 'pie-chart',
          name: '数据监控',
          component: DashBoard
        }
      ],
      selectedKeys: ['1'],
      defaultOpenKeys: ['sub']
    }
    this.toggle = this.toggle.bind(this)
    this.changeMenu = this.changeMenu.bind(this)
  }

  // 控制菜单收起和展开
  toggle (e) {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  // 菜单被点击
  changeMenu (e) {
    const key = e.key
    if (key !== this.state.selectedKeys[0]) {
      this.setState({
        selectedKeys: [key]
      })
    }
  }

  componentWillMount () {
    // 检测 路由的指向
    const parentUrl = this.props.match.url
    const fullUrl = this.props.location.pathname
    if (parentUrl !== fullUrl) {
      const path = fullUrl.split(parentUrl)[1]
      for (let i = 0; i < this.state.routes.length; i++) {
        const item = this.state.routes[i]
        if (item.component) {
          if (item.path === path) {
            const key = (i + 1).toString()
            this.setState({ selectedKeys: [key] })
            break
          }
        } else {
          for (let k = 0; k < item.sub.length; k++) {
            const subItem = item.sub[k]
            if (subItem.path === path) {
              const key1 = `sub-${i + 1}-${k + 1}`
              const key2 = `sub-${i + 1}`
              this.setState({ selectedKeys: [key1],  defaultOpenKeys: [key2]})
              break
            }
          }
        }
      }
    }
  // this.setState({
  //   defaultSelectedKeys: ['3'],
  //   defaultOpenKeys: ['sub']
  // })
  }

  render () {
    return (
      <Layout>
        <CustomMenu
          routes={this.state.routes}
          toggle={this.toggle}
          rootUrl={this.props.match.url}
          changeMenu={this.changeMenu}
          selectedKeys={this.state.selectedKeys}
          defaultOpenKeys={this.state.defaultOpenKeys}
          collapsed={this.state.collapsed}></CustomMenu>
        <div className='main-layout-content'>
          <CustomHeader toggle={this.toggle} collapsed={this.state.collapsed}></CustomHeader>
          <div className='main-layout-iframe-scroll'>
            <Route path={`${this.props.match.url}`} exact component={DashBoard}></Route>
            <Route path={`${this.props.match.url}/publish`} component={Published}></Route>
            <Route path={`${this.props.match.url}/unpublish`} component={Unpublished}></Route>
          </div>
        </div>
      </Layout>
    )
  }
}

// 自定义header

const CustomHeader = ({toggle, collapsed}) => {
  return (
    <div className='main-header'>
      <div className='main-sider-header'>
        <div className='trigger-btn' onClick={toggle}>
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
        </div>
        <ul className='main-sider-header-content'>
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
    </div>
  )
}

// 自定义menu区域

const CustomMenu = ({rootUrl, collapsed, changeMenu, selectedKeys, defaultOpenKeys, routes}) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width='256'>
      <div className='main-sider-menu-logo'>
        <img src='/public/images/favicon.png' />
        {!collapsed && <h1>省心宝科技</h1>}
      </div>
      <Menu
        theme='dark'
        mode='inline'
        selectedKeys={selectedKeys}
        defaultOpenKeys={defaultOpenKeys}
        onClick={changeMenu}>
        {routes.map((item, index) => {
           if (item.component) {
             return (
               <Menu.Item key={index + 1}>
                 <Link to={rootUrl + item.path}>
                 <Icon type={item.icon} />
                 <span>{item.name}</span>
                 </Link>
               </Menu.Item>
             )
           }
           return (
             <SubMenu key={`sub-${index + 1}`} title={<span><Icon type={item.icon} /> <span>{item.name}</span></span>}>
               {item.sub.map((sub, i) => (
                  <Menu.Item key={`sub-${index + 1}-${i + 1}`}>
                    <Link to={rootUrl + sub.path}>
                    <Icon type={sub.icon} />
                    <span>{sub.name}</span>
                    </Link>
                  </Menu.Item>
                ))}
             </SubMenu>
           )
         })}
      </Menu>
    </Sider>
  )
}

export default MainLayout
// {this.state.routes.map((item, i) => {
//   if (item.component) {
//     return <Route
//              key={i}
//              path={this.props.match.url + item.path}
//              exact={!item.path}
//              omponent={item.component}></Route>
//   }
//   item.sub.map((s, k) => <Route key={`sub-${i}-${k}`} path={this.props.match.url + s.path} omponent={s.component}></Route>)
// })}
