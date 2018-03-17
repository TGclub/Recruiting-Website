import React, { Component } from 'react'
import { Layout, Icon, Menu} from 'antd'
import './stylesheets/css/Header.css'
import Home from './Home'
import Recruiting from './Recruiting'
const {  Sider } = Layout
const navItems = [
  { name: 'Recruiting', icon: 'calendar', url: '#/recruiting'},
  { name: 'About', icon: 'team',url: '#/home' },
  { name: 'Github', icon: 'github',url: 'https://github.com/TGclub/Recruiting-Website'}
]
function MenuItem (props) {
  let name = props.item.name
  if (name === 'github') {
    return (
      <a href={props.item.url} target='_blank'>
        {props.item.name}
      </a>
    )
  } else {
    return (
      <a href={props.item.url} style={{color: '#f3f3f3', textDecoration: 'none'}}>
        {props.item.name}
      </a>
    )
  }
}
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      route: window.location.hash.substr(1)
    }
    this.styles = {
      title: {
        fontSize: 25 + 'px'
      },
      url: {
        color: '#fff',
        textDecoration: 'none'
      }
    }
  }
  componentDidMount () {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }

  render() {
    let Child
    switch (this.state.route) {
      case '/home':
        Child = Home
        break
      case '/recruiting':
        Child = Recruiting
        break
      default:
        Child = Home
    }
    return (
      <Layout>
        <Sider
          breakpoint='sm'
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['0']}
          >
            {navItems.map((item, index) => {
              return (
                <Menu.Item
                  key={index}
                  onClick={this.handleClick}
                >
                  <Icon type={item.icon} />
                  <span>
                    <MenuItem item={item}/>
                  </span>
                </Menu.Item>
              )
            })}
          </Menu>
        </Sider>
        <Layout>
          <Child />
        </Layout>
      </Layout>
    )
  }
}