import React, {Component} from 'react'
import {Divider} from 'antd'
import Carousel from './component/Carousel'
import HomeInfo from './component/HomeInfo'
import Footer from './component/Footer'
import imgs from './component/HomeImgs'
export default class Home extends Component {
  render () {
    const imageList = imgs
    return (
      <div>
        <Carousel imgs={imageList}/>
        <HomeInfo/>
        <Footer/>
      </div>
    )
  }
}