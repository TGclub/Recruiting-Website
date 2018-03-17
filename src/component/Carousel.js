import React, { Component } from 'react'
import {Carousel} from 'antd'
import LazyLoad from 'react-lazyload'

export default class Content extends Component {
  constructor (props) {
    super(props)
    this.styles = {
      img: {
        maxWidth: 100 + '%'
      }
    }
  }
  render() {
    return (
      <Carousel effect="fade" autoplay>
        {this.props.imgs.map((item, index) => {
          return (<img key={index + 1} src={item} alt='img'  style={this.styles.img}/>)
        })}
      </Carousel>
    )
  }
}