import React, { Component } from 'react'
import { Card, Col, Row, Layout, Tabs, Icon, Avatar} from 'antd'
import mobile from '../imgs/mobile.jpg'
import frontend from '../imgs/front-end.jpg'
import backend from '../imgs/back-end.jpg'
import product1 from '../imgs/product-manager.jpg'
import product2 from '../imgs/product-manager.png'
import ui from '../imgs/UI:UX.jpg'
import op from '../imgs/op.JPG'
import '../stylesheets/css/Cards.css'
const TabPane = Tabs.TabPane
export default class Cards extends Component {
  constructor(props) {
    super(props)
    this.styles = {
      item: {
        xs: { span: 24},
        sm: { span: 24},
        md: { span: 12},
        lg: { span: 12},
        xl: { span: 12},
        xxl: { span: 12}
      }
    }
    this.datas = [{
      name: 'Web研发部',
      key: 1,
      datas: [{
        name: 'Web后端',
        key: 1,
        number: 6,
        imgSrc: backend
      },{
        name: 'Web前端',
        key: 2,
        number: 6,
        imgSrc: frontend
      },{
        name: 'Web后端',
        key: 1,
        number: 6,
        imgSrc: backend
      },{
        name: 'Web后端',
        key: 1,
        number: 6,
        imgSrc: backend
      },{
        name: 'Web后端',
        key: 1,
        number: 6,
        imgSrc: backend
      },{
        name: 'Web后端',
        key: 1,
        number: 6,
        imgSrc: backend
      }]
    },{
      name: '移动研发部',
      key: 2,
      datas: [{
        name: 'IOS/Android',
        key: 1,
        number: 2,
        imgSrc: mobile
      }]
    },{
        name: '视觉设计部',
        key: 3,
        datas: [{
          name: 'UI/UX',
          key: 1,
          number: 6,
          imgSrc: ui
        }]
      }, {
        name: '产品运营部',
        key: 4,
        datas: [{
          name: '产品',
          key: 1,
          number: 2,
          imgSrc: product1
        }, {
          name: '运营',
          key: 2,
          number: 3,
          imgSrc: product2
        }]
      }, {
        name: '运维安全部',
        key: 5,
        datas: [{
          name: '运维与安全',
          key: 1,
          number: 1,
          imgSrc: op
        }]
      }]
  }
  render() {
    return (
      <Tabs defaultActiveKey="1" id='#Recruiting'>
        {this.datas.map((item) => {
            return (
              <TabPane tab={item.name} key={item.key}>
                <div className='Cards-wrapper'>
                  {item.datas.map((elem) => {
                    return (
                        <Card title={elem.name + '(' + elem.number + '人)'}
                          cover={<img alt="example" src={elem.imgSrc}/>}
                          actions={[<Icon type="setting"/>, <Icon type="edit"/>, <Icon type="ellipsis"/>]}
                          className='Cards-item'
                        >
                          <Card
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                          >
                          </Card>
                        </Card>
                    )
                  })}
                </div>
              </TabPane>
            )
          }
        )}
      </Tabs>
    )
  }
}