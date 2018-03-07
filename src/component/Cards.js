import React, { Component } from 'react'
import { Card, Col, Row, Layout, Tabs, Icon, Avatar} from 'antd'

const TabPane = Tabs.TabPane
export default class Cards extends Component {
  constructor(props) {
    super(props)
    this.datas = [{
      name: 'Web研发部',
      key: 1,
      datas: [{
        name: 'Web后端',
        key: 1
      },{
        name: 'Web前端',
        key: 2
      }]
    },{
      name: '移动研发部',
      key: 2,
      datas: [{
        name: 'IOS',
        key: 1
      },{
        name: 'Android',
        key: 2
      }]
    },{
        name: '视觉设计部',
        key: 3,
        datas: [{
          name: 'UI',
          key: 1
        }, {
          name: 'UX',
          key: 2
        }]
      }, {
        name: '产品运营部',
        key: 4,
        datas: [{
          name: '产品',
          key: 1
        }, {
          name: '运营',
          key: 2
        }]
      }, {
        name: '运维安全部',
        key: 5,
        datas: [{
          name: '运维',
          key: 1
        }, {
          name: '安全',
          key: 2
        }]
      }]
  }
  render() {
    return (
      <Tabs defaultActiveKey="1">
        {this.datas.map((item) => {
          return (
            <TabPane tab={item.name} key={item.key}>
              {item.datas.map((elem) => {
                return (
                  <Row gutter={16} type="inline-flex" >
                    <Col span={12}>
                      <Card title={elem.name}
                      style={{ width: 45 + 'vw' }}
                      cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                      actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                      >
                        <Card
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        >
                          wkkkkk
                        </Card>
                      </Card>
                    </Col>
                  </Row>
                )
              })}
            </TabPane>
          )
        })}
      </Tabs>
    )
  }
}