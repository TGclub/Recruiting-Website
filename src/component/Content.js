import React, { Component } from 'react'
import { Layout, Carousel } from 'antd'
import Cards from './Cards'
import imgs from './imgs'

export default class Content extends Component {
  constructor(props) {
    super(props)
    this.styles = {
      img: {
        width: 80 + '%',
        height: 'auto'
      }
    }
  }
  render() {
    return (
      <Layout>
        <Carousel effect="fade" autoplay>
          {imgs.map((item, index) => {
            return (<img key={index + 1} src={item} style={this.styles.img} alt='img' />)
          })}
        </Carousel>
        <Cards />
      </Layout>
    )
  }
}