import React, {Component} from 'react'

export default class HomeInfo extends Component {
  constructor (props) {
    super(props)
    this.styles = {
      container: {
        background: 'gray',
        height: 800 + 'px',
      }
    }
  }
  render () {
    return (
      <div style={this.styles.container}>
        <h1>这里是宣传工作室怎么怎么样</h1>
        <div></div>
      </div>
    )
  }
}