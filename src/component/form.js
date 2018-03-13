import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { Modal } from 'antd'
const FormItem = Form.Item
const FormItemData = [
  {
    name: '姓名',
    id: 'name'
  }, {
    name: '性别',
    id: 'sex'
  }, {
    name: '学院',
    id: 'academy'
  }, {
    name: '年级',
    id: 'degree'
  }, {
    name: '联系方式',
    id: 'number'
  }, {
    name: '申请方向',
    id: 'orientation'
  }
]
const modalName = '来玩啊'
class form extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnBlur = this.handleOnBlur.bind(this)
  }
  handleSubmit () {
    console.log('submit')
  }
  handleOnBlur () {
    console.log('fuck')
  }
  render () {
    const formItemStyle = {
      labelCol: {
        xs: { span : 24 },
        sm: { span: 4},
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 4}
      }
    }
    return (
      <Form>
        {FormItemData.map((item, index)=> {
          return (
            <FormItem
              label={item.name}
              {...formItemStyle}
              key={index}
              >
              <Input id={item.id} onBlur={this.handleOnBlur}/>
            </FormItem>
          )
        })}
      </Form>
    )
  }
}
const FFF = Form.create()(form)


class ModalForm extends Component {
  constructor (props) {
    super(props)
    this.showModal = this.showModal.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.state = {
      visible: false
    }
  }
  showModal () {
    this.setState({
      visible: true
    })
  }

  handleSubmit () {
    /* To Do ajax */
    this.setState({
      visible: false
    })
  }

  handleCancel () {
    this.setState({
      visible: false
    })
  }

  render () {
    return (
      <div>
        <Button onClick={this.showModal}>报名</Button>
        <Modal
          title={modalName}
          visible={this.state.visible}
          onOk={this.handleSubmit}
          onCancel={this.handleCancel}
        >
          <FFF />
        </Modal>
      </div>
    )
  }
}

export default ModalForm