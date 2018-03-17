import React, { Component } from 'react'
import { Card, Col, Row, Layout, Tabs, Icon, Avatar, Button} from 'antd'
import mobile from '../imgs/mobile.jpg'
import frontend from '../imgs/front-end.jpg'
import backend from '../imgs/back-end.jpg'
import product1 from '../imgs/product-manager.jpg'
import product2 from '../imgs/product-manager.png'
import ui from '../imgs/UI:UX.jpg'
import op from '../imgs/op.JPG'
import '../stylesheets/css/Cards.css'
import LazyLoad from 'react-lazyload'
const TabPane = Tabs.TabPane
export default class Cards extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.styles = {
      img: {
        maxWidth: 100 + '%'
      }
    }
    this.datas = [{
      name: 'Web研发部',
      key: 1,
      datas: [{
        name: 'Web前端',
        key: 2,
        number: 6,
        description: '你应该选择，那些让你产生最大兴趣和热情的职业。因为未来所有行业，低端的、低技能的岗位都会被机器取代，只有技能最强、最有创造性的人不会被淘汰。兴趣，也只有兴趣，才会让你产生不倦的热情，钻研下去，变得更优秀。',
        imgSrc: frontend
      },{
        name: 'Web后端',
        key: 1,
        number: 6,
        description: '你应该选择，那些让你产生最大兴趣和热情的职业。因为未来所有行业，低端的、低技能的岗位都会被机器取代，只有技能最强、最有创造性的人不会被淘汰。兴趣，也只有兴趣，才会让你产生不倦的热情，钻研下去，变得更优秀。',
        imgSrc: backend
      }]
    },{
      name: '移动研发部',
      key: 2,
      datas: [{
        name: 'IOS/Android',
        key: 1,
        number: 2,
        description: '你应该选择，那些让你产生最大兴趣和热情的职业。因为未来所有行业，低端的、低技能的岗位都会被机器取代，只有技能最强、最有创造性的人不会被淘汰。兴趣，也只有兴趣，才会让你产生不倦的热情，钻研下去，变得更优秀。',
        imgSrc: mobile
      }]
    },{
        name: '视觉设计部',
        key: 3,
        datas: [{
          name: 'UI/UX',
          key: 1,
          number: 6,
          description: '你应该选择，那些让你产生最大兴趣和热情的职业。因为未来所有行业，低端的、低技能的岗位都会被机器取代，只有技能最强、最有创造性的人不会被淘汰。兴趣，也只有兴趣，才会让你产生不倦的热情，钻研下去，变得更优秀。',
          imgSrc: ui
        }]
      }, {
        name: '产品运营部',
        key: 4,
        datas: [{
          name: '产品',
          key: 1,
          number: 2,
          description: '你应该选择，那些让你产生最大兴趣和热情的职业。因为未来所有行业，低端的、低技能的岗位都会被机器取代，只有技能最强、最有创造性的人不会被淘汰。兴趣，也只有兴趣，才会让你产生不倦的热情，钻研下去，变得更优秀。',
          imgSrc: product1
        }, {
          name: '运营',
          key: 2,
          number: 3,
          description: '你应该选择，那些让你产生最大兴趣和热情的职业。因为未来所有行业，低端的、低技能的岗位都会被机器取代，只有技能最强、最有创造性的人不会被淘汰。兴趣，也只有兴趣，才会让你产生不倦的热情，钻研下去，变得更优秀。',
          imgSrc: product2
        }]
      }, {
        name: '运维安全部',
        key: 5,
        datas: [{
          name: '运维与安全',
          key: 1,
          number: 1,
          description: '你应该选择，那些让你产生最大兴趣和热情的职业。因为未来所有行业，低端的、低技能的岗位都会被机器取代，只有技能最强、最有创造性的人不会被淘汰。兴趣，也只有兴趣，才会让你产生不倦的热情，钻研下去，变得更优秀。',
          imgSrc: op
        }]
      }]
  }
  handleClick () {
    this.props.handleChangeState('true')
  }
  render() {
    return (
      <Tabs defaultActiveKey="1" type='line' animated='true'>
        {this.datas.map((item) => {
            return (
              <TabPane tab={item.name} key={item.key} style={{ textAlign: 'center' }} forceRender='true'>
                <div className='Cards-wrapper' style={this.styles.img}>
                  {item.datas.map((elem) => {
                    return (
                        <Card title={elem.name + '(' + elem.number + '人)'}
                          cover={<LazyLoad><img alt="example" src={elem.imgSrc} style={this.styles.img}/></LazyLoad>}
                          actions={[<Icon spin='true' type="setting"/>, <Icon type="edit" onClick={this.handleClick}/>]}
                          className='Cards-item'
                          hoverable='true'
                        >
                          <Card>
                            {elem.description}
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