import React from 'react'
import './app.scss'
import { Card, Icon, Typography } from 'antd'
const { Text } = Typography

const gridStyle = {
  width: '33.33%',
  textAlign: 'center',
  padding: 0
}

export default class CustomLeft extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menu: [
        {
          title: '基本组件',
          list: [
            {
              type: 'TEXT',
              icon: 'font-size',
              name: '文本'
            },
            {
              type: 'PICTURE',
              icon: 'file-image',
              name: '图片'
            },
            {
              type: 'BUTTON',
              name: '按钮'
            },
            {
              type: 'SHAPE',
              name: '形状'
            },
            {
              type: 'VIDEO',
              icon: 'youtube',
              name: '视频'
            },
            {
              type: 'LINE',
              icon: 'underline',
              name: '辅助线'
            }
          ]
        }
      ]
    }
  }

  render () {
    return (
      <div className='app-left'>
        {this.state.menu.map((item, index) => (
           <Card
             title={item.title}
             bordered={false}
             bodyStyle={{ padding: 0 }}
             key={index}>
             {item.list.map(menu => (
                <Card.Grid style={gridStyle} key={menu.type}>
                  <div className='menu-item'>
                    <div>
                      {menu.icon && <Icon type={menu.icon} />}
                      <p>
                        {menu.name}
                      </p>
                    </div>
                  </div>
                </Card.Grid>
              ))}
           </Card>
         ))}
      </div>
    )
  }
}
