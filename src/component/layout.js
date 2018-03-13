import React, { Component } from 'react'
import { Layout, Divider} from 'antd'
import Header from './Header'
import Footer from './Footer'
import Sider from './Sider'
import Content from './Content'
export default class Main extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {}
  componentDidMount() {
    const promise = new Promise(function(resolve, reject) {
      resolve(1);
    })
    promise.then((val) => {
      console.log(val)
      return val + 2
    }).then((val) => {
      console.log(val)
    })
  }
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return (
      <Layout>
        <Header />
        <Layout>
          <Sider />
          <Content />
        </Layout>
        <Divider/>
        <Footer />
      </Layout>
    )
  }
}