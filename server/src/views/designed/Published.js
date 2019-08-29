import React from 'react'
import { Card, Row, Col, Typography, Button, PageHeader, Tabs, Icon, Avatar } from 'antd'
const { Title, Paragraph, Text } = Typography
const { TabPane } = Tabs
import './index.scss'

class Published extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      num: [1, 2, 3, 4, 5, 6]
    }
  }

  render () {
    const CubeTabs = <CustomTabs></CustomTabs>
    return (
      <div className='publish-module'>
        <Header CubeTabs={CubeTabs}></Header>
        <div className='main-page-common-warp special'>
          <Row gutter={20}>
            {this.state.num.map(item => (
               <Col
                 key={item}
                 lg={12}
                 xl={8}
                 xxl={6}>
               <Card className='mt-20' bordered={false} actions={[<Icon type='setting' />, <Icon type='edit' />, <Icon type='ellipsis' />]}>
                 <Card.Meta avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" />} title='Ant design' description='在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页' />
               </Card>
               </Col>
             ))}
          </Row>
        </div>
      </div>
    )
  }
}

// header
const Header = ({ CubeTabs }) => {
  return (
    <PageHeader title='已发布的线上资源' footer={CubeTabs}>
      <Row>
        <Col span={16}>
        <Paragraph>
          段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态， 提供跨越设计与开发的体验解决方案。
        </Paragraph>
        <p className='header-actions'>
          <a href='#/design'><img src='https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg' alt='start' /> 快速发布</a>
          <a><img src='https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg' alt='info' /> 产品信息</a>
          <a><img src='https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg' alt='doc' /> 开发文档</a>
        </p>
        </Col>
        <Col span={8}>
        <img style={{margin: '0 auto', display: 'block'}} src='https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original' alt='content' />
        </Col>
      </Row>
    </PageHeader>
  )
}
// header-footer
const CustomTabs = () => {
  return (
    <Tabs defaultActiveKey='1'>
      <TabPane tab='应用' key='1' />
      <TabPane tab='文章' key='2' />
      <TabPane tab='设计' key='3' />
    </Tabs>
  )
}
export default Published
