import React from 'react'
import { Card, Row, Col, Typography, Button, Icon, PageHeader, Avatar, List } from 'antd'
const { Title, Paragraph, Text } = Typography
import './index.scss'
import { inherits } from 'util'
class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 21, 17, 18, 19, 20]
    }
  }

  render () {
    return (
      <div className='dashboard-module'>
        <Header></Header>
        <div className='dashboard-module-content'>
          <Row gutter={{md: 0, lg: 20}}>
            <LeftLayout>
              <Projecting></Projecting>
              <Trend></Trend>
            </LeftLayout>
            <RightLayout>
              <QuickNav></QuickNav>
            </RightLayout>
          </Row>
        </div>
      </div>
    )
  }
}

// 顶部组件
const Header = () => {
  return (
    <PageHeader title='工作台'>
      <div className='dashboard-header-warp'>
        <div className='header-user'>
          <Avatar size={72} src='https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'></Avatar>
          <div className='user-info'>
            <Title level={4}>
              早安，Serati Ma，祝你开心每一天！
            </Title>
            <Text>
              交互专家 | 省心宝科技－某某某事业群－某某平台部－某某技术部－UED
            </Text>
          </div>
        </div>
      </div>
    </PageHeader>
  )
}
// 左侧组件
const LeftLayout = ({ children }) => {
  return <Col xl={16} lg={24} className='mt-20'>
         {children}
         </Col>
}
// 右侧组件
const RightLayout = ({ children}) => {
  return <Col xl={8} lg={24} className='mt-20'>
         {children}
         </Col>
}
// 进行的项目
const Projecting = () => {
  const list = [1, 2, 3, 4, 5, 6]
  return (
    <Card
      title='进行的项目'
      bordered={false}
      extra={<a href="#">全部项目</a>}
      bodyStyle={{padding: 0}}>
      {list.map(item => (
         <Card.Grid className='gridStyle' key={item}>
           <div className='flex-center'>
             <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
             <Text strong style={{marginLeft: 12}}>
               Alipay
             </Text>
           </div>
           <Paragraph style={{marginTop: '1rem'}}>
             那是一种内在的东西，他们到达不了，也无法触及的
           </Paragraph>
           <div className='flex-center-between'>
             <Text type='secondary'>
               前端工作组
             </Text>
             <Text type='secondary'>
               2019-5-16
             </Text>
           </div>
         </Card.Grid>
       ))}
    </Card>
  )
}

// 动态

const Trend = () => {
  const list = [1, 2, 3, 4, 5, 6]
  return (
    <Card title='动态' bordered={false} className='mt-20'>
      <List>
        {list.map(item => (
           <List.Item key={item}>
             <List.Item.Meta avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} description='1小时前' title='曲丽丽 在 高逼格设计天团 新建项目 六月迭代'></List.Item.Meta>
           </List.Item>
         ))}
      </List>
    </Card>
  )
}

// 便捷导航

const QuickNav = () => {
  const list = [1, 2]
  return (
    <Card title='快速开始 / 便捷导航' bordered={false} bodyStyle={{padding: 0}}>
      <Card bordered={false} cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}>
        <Card.Meta avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} title='Card title' description='This is the description' />
      </Card>
    </Card>
  )
}
export default Index
