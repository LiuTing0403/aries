import React, {PureComponent} from 'react'
import {Form, Input, Button, Icon} from 'antd'

import './styles/create.css'

const FormItem = Form.Item

class CreateForm extends PureComponent {
  handleSubmit(e) {
    e.preventDefault()
  }
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const {getFieldDecorator} = this.props.form
    return (
      <div className='create'>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormItem
            {...formItemLayout}
            label="Name"
          >
            {getFieldDecorator('name', {
              rules: [{
                required: true, message: 'Please input Name',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <Button>创建</Button>
        </Form>
      </div>
    )
  }
}

export default Form.create()(CreateForm)
