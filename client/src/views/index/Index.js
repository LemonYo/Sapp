import React from 'react'
import './index.scss'
import {add} from '../../common'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1
    }
  }

  componentDidMount() {
    this.setState({num: add(1)})
  }

  render() {
    return (
      <div className="index-page">
        <h1>welcome to React page</h1>
        <p>我是一个侠客</p>
        <p>sb{this.state.num}</p>
      </div>
    )
  }
}

export default Index