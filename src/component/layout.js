import React, { Component } from 'react'
import { Layout} from 'antd'
import Header from './Header'
import Footer from './Footer'
import Sider from './Sider'
import Content from './Content'
export default class Main extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {}
  componentDidMount() {}
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
        <Footer />
      </Layout>
    )
  }
}