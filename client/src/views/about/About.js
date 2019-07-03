import React from 'react'
import './about.scss'

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false, list: [1, 2, 3,4,5,6,7,8,9,10] };
    this.toggleContainer = React.createRef();

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }
  touchStop(e) {
    // e.nativeEvent.preventDefault()
    console.log(e, e.nativeEvent)
  }
  onClickOutsideHandler(event) {
    if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  }
  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler);
  }

  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }

  render() {
    return (
      <div className="about-page">
        <h1>welcome to About page</h1>
        <div ref={this.toggleContainer}>
          <button onClick={this.onClickHandler} >Select an option</button>
          {this.state.isOpen ? (
            <ul className="pop" onTouchMove={this.touchStop}>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          ) : null}
        </div>
        {
          this.state.list.map((item) => <div className="big-text" key={JSON.stringify(item)}>Babel 是一个工具链，主要用于在旧的浏览器或环境中将 ECMAScript 2015+ 代码转换为向后兼容版本的 JavaScript 代码</div>)
        }
      </div>
    )
  }
}

export default About