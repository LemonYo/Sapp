import React from 'react'
import './app.scss'
import { Card } from 'antd'

export default class CustomRight extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='app-right'>
        我是右边
      </div>
    )
  }
}
