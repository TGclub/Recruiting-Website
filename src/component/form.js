import React, { Component } from 'react'
import { Form, Input, Button, Select} from 'antd'
import { Modal } from 'antd'
import ajax from './ajax'
const FormItem = Form.Item
const Option = Select.Option
const FormItemData = [
  {
    name: '姓名',
    id: 'name',
    type: 'input',
    maxlength: 8
  }, {
    name: '性别',
    id: 'sex',
    type: 'select',
    placeholder: '请选择性别',
    data: ['男', '女']
  }, {
    name: '学院',
    id: 'academy',
    type: 'input',
    maxlength: 8
  }, {
    name: '年级',
    id: 'degree',
    type: 'select',
    placeholder: '请选择年级',
    data: ['大一', '大二', '大三', '大四']
  }, {
    name: 'QQ',
    id: 'number',
    type: 'input',
    maxlength: 11
  }, {
    name: '申请方向',
    id: 'orientation',
    type: 'select',
    placeholder: '请选择方向',
    data: ['web', 'IOS']
  }
]

function ModalSuccess() {
  const modal = Modal.success({
    title: '报名成功',
    content: 'Deep Dark Fantasy'
  })
  setTimeout(() => {
    modal.destroy()
    return false
  }, 5000)
}

function InfoItem (props) {
  const type = props.item.type
  if (type === 'input') {
    return (
      <Input
      id={props.item.id}
      onBlur={props.onBlur}
      maxLength={props.item.maxlength}
      />
    )
  } else if (type === 'select') {
    const options = props.item.data
    const placeholder = props.item.placeholder
    return (
      <Select
        id={props.item.id}
        style={{ width: 195}}
        placeholder={placeholder}
      >
        {options.map(item => {
          return (
            <Option
              key={item}
            >
              {item}
            </Option>
          )
        })}
      </Select>
    )
  }
}


class form extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnBlur = this.handleOnBlur.bind(this)
  }
  handleSubmit () {
    console.log('submit')
  }
  handleOnBlur (event) {
    window.confirm(event.target.value)
  }
  render () {
    const formItemStyle = {
      labelCol: {
        xs: { span : 24 },
        sm: { span: 8},
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10}
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
              <InfoItem item={item} />
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
      visible: false,
      confirmLoading: false
    }
    this.styles = {
      button: {
        textAlign: 'center',
        marginTop: 20 + 'px',
        marginLeft: -33 + 'px'
      }
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
      confirmLoading: true
    })
    const data = {
      F1:"zsssss",  // name
      F2_dropdown:"男",  // sex
      F3:"我我我",  // collage
      F4_dropdown:"2017级",  // grade
      F5:9999,  // QQ
      F6_dropdown:"Web前端",  // direction
      INITTIME: Date.now(),   // time
      FRMID:"5aa8b1a3bb7c7c36b0adb5c8",
      TMOUT_number:"17",
      SECKEY:"5aa8b1a3bb7c7c36b0adb5c8761363199"
    }
    //  ajax.ajax('http://localhost:3000', 'get')
    ajax.ajax('http://enroll.zhengsj.top/postForm', 'post', JSON.stringify(data))
      .then(function (response) {
        console.log(response)
        this.setState({
          confirmLoading: false,
          visible: ModalSuccess()
        })
      }, function (err) {
        console.log(err)
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
        <Button
          onClick={this.showModal}
          type="primary"
          style={this.styles.button}
        >
          报名
        </Button>
        <Modal
          title="To be a code gay"
          visible={this.state.visible}
          onOk={this.handleSubmit}
          onCancel={this.handleCancel}
          confirmLoading={this.state.confirmLoading}
          okText="提交"
          cancelText="返回"
        >
          <FFF />
        </Modal>
      </div>
    )
  }
}

export default ModalForm