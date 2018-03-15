import React, { Component } from 'react'
import { Layout, Icon, Menu} from 'antd'
import '../stylesheets/css/Header.css'
const Header = Layout
const navItems = [
  { name: 'Home', icon: 'home', url: '#'},
  { name: 'Recruiting', icon: 'calendar', url: 'Recruiting'},
  { name: 'About', icon: 'team',url: '#' },
  { name: 'github', icon: 'github',url: 'https://github.com/TGclub/Recruiting-Website'}
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
      <a href={props.item.url}>
        {props.item.name}
      </a>
    )
  }
}
export default class Nav extends Component {
  constructor(props) {
    super(props)
    this.styles = {
      title: {
        fontSize: 25 + 'px'
      },
      item: {
        fontSize: 18 + 'px',
        float: 'right'
      },
      url: {
        color: '#333333'
      }
    }
  }
  render() {
    return (
      <Header
        breakpoint={'xs'}
        collapsible={true}
      >
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['4']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item style={this.styles.title} className="logo"><Icon type='star'/>Recruiting</Menu.Item>
          {navItems.reverse().map((item, index) => {
            return (
              <Menu.Item
                key={index + 1}
                style={this.styles.item}
                onClick={this.handleClick}
              >
              <Icon type={item.icon} />
                <span style={this.styles.url}>
                  <MenuItem item={item} />
                </span>
            </Menu.Item>
            )
          })}
        </Menu>
      </Header>
    )
  }
}