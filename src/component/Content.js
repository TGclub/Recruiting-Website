import React, { Component } from 'react'
import { Carousel } from 'antd'
import imgs from './imgs'

export default class Content extends Component {
  constructor(props) {
    super(props)
    this.styles = {
      img: {
        width: 100 + '%',
        height: 500 + 'px'
      }
    }
  }
  render() {
    return (
      <Carousel effect="fade" autoplay> 
        {imgs.map((item, index) => {
          return (<img key={index + 1} src={item} style={this.styles.img}/>)
        })}
      </Carousel>
    )
  }
}