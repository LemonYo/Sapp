import React from 'react'
import { Layout } from 'antd'
import './app.scss'
import CustomLeft from './CustomLeft'
import CustomCenter from './CustomCenter'
import CustomRight from './CustomRight'
class Application extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='main-layout-iframe app-module'>
        <CustomLeft></CustomLeft>
        <CustomCenter></CustomCenter>
        <CustomRight></CustomRight>
      </div>
    )
  }
}

export default Application
