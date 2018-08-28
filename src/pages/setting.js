import React, {PureComponent} from 'react'
import {Form, Input, Button, message} from 'antd'
import {resetPassword} from '../libs/api'

const FormItem = Form.Item

class Setting extends PureComponent {
  handleSubmit(e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        resetPassword(values)
        .then(res => {
          const _message = res.message
          console.log(res)
          if (res.status === 'success') {
            message.success('密码重置成功')
          }
          else {
            message.error(_message)
          }
        })
        .catch(err => {
          console.error(err)
        })
      }
    });
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
      <div className='formContent'>
        <Form onSubmit={this.handleSubmit.bind(this)}>
        <FormItem
            {...formItemLayout}
            label="旧密码"
          >
            {getFieldDecorator('oldPassword', {
              rules: [{
                required: true, message: 'Please input Your old password',
              }],
            })(
              <Input type='password' placeholder='Please input Your old password'/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="新密码"
          >
            {getFieldDecorator('newPassword', {
              rules: [{
                required: true, message: 'Please input Your new password',
              }],
            })(
              <Input type='password' placeholder='Please input Your new password'/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="确认新密码"
          >
            {getFieldDecorator('passwordConfirmation', {
              rules: [{
                required: true, message: 'Please confirm Your new password',
              }],
            })(
              <Input type='password' placeholder='Please confirm Your new password'/>
            )}
          </FormItem>
          <div className='submitBtn'>
            <Button type='primary' htmlType='submit'>重置密码</Button>
          </div>
        </Form>
      </div>
    )
  }
}

export default Form.create()(Setting)
