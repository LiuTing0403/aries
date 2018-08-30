import React, {PureComponent} from 'react'
import {Table} from 'antd'
import {Link} from 'react-router-dom'
import {getconferenceList} from '../libs/api'
export default class conferenceList extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      count: 0,
      pagination: 1
    }
  }
  componentDidMount() {
    this.getData(1)
  }
  getData(page) {
    getconferenceList({page}).then(res => {
      this.setState({
        list: res.conferences,
        count: res.count
      })
    })
  }
  get columns() {
    return [{
    title: '会议名称',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: '会议地点',
    dataIndex: 'location',
    key: 'location',
  }, {
    title: '时间',
    dataIndex: 'startAt',
    key: 'startAt',
    render: (text, record) => (<span>{(new Date(record.startAt)).toLocaleString()}</span>)
  }, {
    title: '报名截止时间',
    dataIndex: 'signupUntil',
    key: 'signupUntil',
    render: (text, record) => (<span>{(new Date(record.signupUntil)).toLocaleString()}</span>)
  }, {
    title: '与会人数',
    key: 'count',
    dataIndex: 'count',
  }, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <Link to={`/conference/${record.id}`}>详情</Link>
      </span>
    ),
  }]}

  render() {
    return (
      <Table columns={this.columns} dataSource={this.state.list}
        pagination={{
          page: this.state.page,
          total: this.state.count,
          onChange: (p) => {
            this.setState({page: p})
            this.getData(p)
          }}}/>
    )
  }
}
