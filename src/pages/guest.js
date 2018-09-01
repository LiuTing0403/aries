import React, {PureComponent} from 'react'
import {Button} from 'antd'
import {getGuest, updateGuestStatus} from '../libs/api'

export default class GuestDetail extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      guest: {}
    }
  }
  componentDidMount() {
    const {cfId, guestId} = this.props.match.params
    getGuest({cfId, guestId})
    .then(res => {
      if (res.status === 'success') {
        this.setState({guest: res.guest})
      }
      console.log(res)
    })
  }
  signUp() {
    const {cfId, guestId} = this.props.match.params
    updateGuestStatus({cfId, guestId, signed_up: true})
  }
  render() {
    const {guest} = this.state
    return (
      <div>
        嘉宾详情
        <div>姓名：{guest.name}</div>
        <div>性别：{guest.gender}</div>
        <div>邮箱：{guest.email}</div>
        <div>证件类型：{guest.id_type}</div>
        <div>证件号码：{guest.id_no}</div>
        <Button type='primary' onClick={this.signUp.bind(this)}>签到</Button>
      </div>
    )
  }
}
