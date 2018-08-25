import React, {PureComponent} from 'react'
import {Form, Input, Button, Icon} from 'antd'

import './styles/create.css'

class CreateForm extends PureComponent {
  render() {
    return (
      <div className='create'>
        <Form>
          <Input placeholder='会议名称'/>
          <Button>创建</Button>
        </Form>
      </div>
    )
  }
}

export default CreateForm
