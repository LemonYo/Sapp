import React from 'react'
import './index.scss'

class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('di')
  }

  render() {
    return (
      <div className="index-page">
        <h1>welcome to React page</h1>
        <p>我是一个侠客</p>
        <p>sb</p>
      </div>
    )
  }
}

export default Index