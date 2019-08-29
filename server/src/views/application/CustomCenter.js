import React from 'react'
import './app.scss'
import { Card, Menu, Popover, Icon } from 'antd'

export default class CustomCenter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      sizeList: [
        {
          name: 'iphone 5/se',
          width: 320,
          height: 568
        },
        {
          name: 'iphone 6/7/8',
          width: 375,
          height: 667
        },
        {
          name: 'iphone 6/7/8 plus',
          width: 414,
          height: 736
        },
        {
          name: 'iphone x',
          width: 375,
          height: 812
        }
      ],
      sizeIndex: 1,
      sizeVisible: false
    }
    this.changeSize = this.changeSize.bind(this)
    this.handleVisibleChange = this.handleVisibleChange.bind(this)
  }

  changeSize (e) {
    const index = e.key
    this.setState({sizeIndex: index, sizeVisible: false})
  }

  handleVisibleChange (sizeVisible) {
    this.setState({sizeVisible})
  }

  // 

  render () {
    const { sizeList, sizeIndex } = this.state
    const CustomMenuForDrop = <CustomMenu list={sizeList} changeSize={this.changeSize}></CustomMenu>
    const { width, height, name } = sizeList[sizeIndex]
    const iframeStyle = {
      width,
    height}
    return (
      <div className='app-center'>
        <div className='app-center-iframe-warp'>
          <div className='iframe-size'>
            <Popover
              content={CustomMenuForDrop}
              trigger='click'
              visible={this.state.sizeVisible}
              onVisibleChange={this.handleVisibleChange}>
              <div className='ant-dropdown-link'>
                {name}
                <Icon type='down' />
              </div>
            </Popover>
          </div>
          <div className='iframe-container' style={iframeStyle}>
            <iframe
              id='ifr'
              frameBorder='0'
              width='100%'
              height='100%'
              marginHeight='0'
              marginWidth='0'
              src='http://192.168.0.8:3086/#/transform'></iframe>
          </div>
          <div className='iframe-tools'></div>
        </div>
      </div>
    )
  }

}

// 手机型号选择下拉组件
const CustomMenu = ({ list, changeSize }) => {
  return (
    <Menu onClick={changeSize}>
      {list.map((item, index) => (
         <Menu.Item key={index}>
           <p>
             {item.name}<span>（{item.width}px * {item.height}px）</span>
           </p>
         </Menu.Item>
       ))}
    </Menu>
  )
}
