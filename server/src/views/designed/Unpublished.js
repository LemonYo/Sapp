import React from 'react'
import { Card, Row, Col, Typography, Button } from 'antd'
const { Title, Paragraph, Text } = Typography
import './index.scss'

export default class Unpublished extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 21, 17, 18, 19, 20]
    }
  }

  render () {
    return (
      <div className='main-page-box'>
        <Typography>
          <Title>
            未发布的线上资源
          </Title>
          <Paragraph>
            In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers
            difficulties and duplication and reduce the efficiency of development.
          </Paragraph>
        </Typography>
        <Row gutter={20}>
          {this.state.num.map(item => (
             <Col key={item} span={8} style={{marginTop: 15}}>
             <Card title='Card title' bordered={false}>
               <p>
                 Card content
               </p>
               <p>
                 Card content
               </p>
               <p>
                 Card content
               </p>
             </Card>
             </Col>
           ))}
        </Row>
      </div>
    )
  }
}
