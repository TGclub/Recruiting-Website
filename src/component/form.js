import React, { Component } from 'react'
import { Form, Input } from 'antd'

const FormItem = Form.Item
const FormItemDatas = [{
    name: '姓名'
  }, {
    name: '性别'
  }, {
    name: '学院'
  }, {
    name: '年级'
  }, {
    name: '联系方式'
  }, {
    name: '申请方向'
  }
]
class form extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit () {
    console.log('submit')
  }
  render () {
    const formItemStyle = {
      labelCol: {
        xs: { span : 24 },
        sm: { span: 4},
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12}
      }
    }
    return (
      <Form onSubmit={this.handleSubmit} >
        {FormItemDatas.map((item => {
          return (
            <FormItem label={item.name} {...formItemStyle}>
              <Input />
            </FormItem>
          )
        }))}
      </Form>
    )
  }
}
const FFF = Form.create()(form)
export default FFF