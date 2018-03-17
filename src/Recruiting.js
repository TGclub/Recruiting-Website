import React, { Component } from 'react'
import Carousel from './component/Carousel'
import Cards from './component/Cards'
import ModalForm from './component/form'
import imgs from './component/RecruitingImgs'
import Footer from "./component/Footer";

export default class Recruiting extends Component {
  constructor (props) {
    super(props)
    this.state = {
      msg: false
    }
    this.handleChangeState = this.handleChangeState.bind(this)
  }
  handleChangeState (msg) {
    if( msg === 'false') {
      this.setState({
        msg: false
      })
    } else {
      this.setState({
        msg: true
      })
    }
  }
  render () {
    const imageList = imgs
    return (
      <div>
        <Carousel imgs={imageList}/>
        <Cards handleChangeState={this.handleChangeState}/>
        <ModalForm msg={this.state.msg} handleChangeState={this.handleChangeState}/>
        <Footer/>
      </div>
    )
  }
}