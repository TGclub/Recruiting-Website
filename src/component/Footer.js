import React, { Component } from 'react'
import { Layout } from 'antd'

const footer = Layout
export default class Footer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer>
        CTG Recruiting &copy;2018 <br/>Created by GeniusFunny
      </footer>
    )
  }
}