import React, {PureComponent} from 'react'
import {Form, Input, Button, Icon, Modal, message} from 'antd'
import {login} from '../libs/api'

import './styles/signin.css'

const FormItem = Form.Item

class SignIn extends PureComponent {
  handleSubmit(e) {
    e.preventDefault()
    console.log()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        login(values)
        .then(res => {
          console.log(res)
          if (res.status === 'success') {
            const token = res.auth_token
            window.localStorage.setItem('token', token)
            window.G.history.push('/create')
            message.success("登录成功")
          } else {
            Modal.error({title: res.message})
          }
        })
        .catch(error => console.log(error))
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
