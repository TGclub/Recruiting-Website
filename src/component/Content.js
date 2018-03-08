import React, { Component } from 'react'
import { Layout, Carousel, Input, Form } from 'antd'
import Cards from './Cards'
import FFF from './form'
import imgs from './imgs'

const FormItem = Form.Item
export default class Content extends Component {
  constructor(props) {
    super(props)
    this.styles = {
      img: {
        width: 80 + '%',
        height: 'auto'
      },
      title: {
        backgroundColor: 'white',
        marginTop: 20 + 'px'
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
        <FFF />
      </Layout>
    )
  }
}