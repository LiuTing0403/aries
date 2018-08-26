import React, {PureComponent} from 'react'
import {Form, Input, Button, DatePicker} from 'antd'

import './styles/create.css'

const FormItem = Form.Item

class CreateForm extends PureComponent {
  handleSubmit(e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // window.fetch('url', {
        //   method: 'POST',
        //   mode: 'no-cors',
        //   headers: new Headers({
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        //     'Access-Control-Allow-Origin': '*'
        //   }),
        //   body: JSON.stringify(values)
        // })
        // .then(res => res.json())
        // .then(res => console.log(res))
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
              <Input placeholder='Please input name'/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Location"
          >
            {getFieldDecorator('location', {
              rules: [{
                required: true, message: 'Please input Location',
              }],
            })(
              <Input placeholder='Please input Location'/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Start Time"
          >
            {getFieldDecorator('start_date', {
              rules: [{
                required: true, message: 'Please input Start Date',
              }],
            })(
              <DatePicker 
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                placeholder="Select Start Time"/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="End Time"
          >
            {getFieldDecorator('end_date', {
              rules: [{
                required: true, message: 'Please input End Time',
              }],
            })(
              <DatePicker 
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                placeholder="Select End Time"/>
            )}
          </FormItem>
          <Button type='primary' htmlType='submit'>创建</Button>
        </Form>
      </div>
    )
  }
}

export default Form.create()(CreateForm)
