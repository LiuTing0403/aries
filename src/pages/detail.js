import React, {PureComponent} from 'react'
import {Table} from 'antd'
import {getconference, getGuestsList} from '../libs/api'

export default class Detail extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      conference: {},
      guests: [],
      count: 0
    }
  }
  componentDidMount() {
    const id = this.props.match.params.id
    getconference({id})
    .then(res => {
      if (res.status === 'success') {
        this.setState({conference: res.conference})
      }
    })
    this.getGuests(1)
  }
  getGuests(page) {
    const id = this.props.match.params.id
    getGuestsList({id, page})
    .then(res => {
      if (res.status === 'success') {
        this.setState({count: res.count, guests: res.items})
      }
    })
  }
  get columns() {
    return [{
    title: '嘉宾姓名',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: '性别',
    dataIndex: 'gender',
    key: 'gender'
  }, {
    title: '单位',
    dataIndex: 'unit',
    key: 'unit'
  }, {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email'
  }, {
    title: '手机',
    dataIndex: 'mobile',
    key: 'mobile'
  }, {
    title: '证件类型',
    dataIndex: 'id_type',
    key: 'id_type',
  }, {
    title: '证件号码',
    dataIndex: 'id_no',
    key: 'id_no',
  }, {
    title: '状态',
    dataIndex: 'approved',
    key: 'approved',
    render: (text, record) => <span>{record.approved ? '已审核通过' : '待审核'}</span>
  }, {
    title: '操作',
    key: 'action',
    render: () => (
      <span>
        <a href="javascript:;">接受</a>
      </span>
    ),
  }]}
  get data() {
    return [{
        key: '1',
        name: 'xxx',
        gender: 'F',
        company: 'XXXX',
        email: 'xxx@qq.com',
        idType: '护照',
        id: '3456789'
      }, {
        key: '2',
        name: 'xxx',
        gender: 'F',
        company: 'XXXX',
        email: 'xxx@qq.com',
        idType: '护照',
        id: '3456789'
      }, {
        key: '3',
        name: 'xxx',
        gender: 'F',
        company: 'XXXX',
        email: 'xxx@qq.com',
        idType: '护照',
        id: '3456789'
      }];
  }
  render() {
    const {conference} = this.state
    return (
      <div className='detail' style={{padding: '20px'}}>
        <h2>{conference.name}</h2>
        <p>会议时间：{conference.startAt}</p>
        <p>会议地点：{conference.location}</p>
        <p>会议状态：报名中</p>
        <Table columns={this.columns} dataSource={this.state.guests} pagination={{
          page: this.state.page,
          total: this.state.count,
          onChange: (p) => {
            this.setState({page: p})
            this.getGuests(p)
          }
        }} />
      </div>
    )
  }
}
