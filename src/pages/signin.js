import React, {PureComponent} from 'react'
import {Form, Input, Button, Icon} from 'antd'

import './styles/signin.css'

const FormItem = Form.Item

class SignIn extends PureComponent {
  handleSubmit(e) {
    e.preventDefault()
    console.log()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        window.fetch('url')
        .then(res => res.json())
        .then(res => console.log(res))
      }
    });
  }
  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <div className='signIn'>
        <Form onSubmit={this.handleSubmit.bind(this)} className='signInForm'>
          <h2>会议管理系统</h2>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{required: true, message: 'Please input your username!'}]
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='Username' />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <Button type="primary" htmlType="submit" className="loginButton">
            Log in
          </Button>
        </Form>
      </div>
    )
  }
}

export default Form.create()(SignIn)
