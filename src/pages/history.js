import React, {PureComponent} from 'react'
import {Table} from 'antd'
import {Link} from 'react-router-dom'
export default class ConfluenceList extends PureComponent {
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
    dataIndex: 'time',
    key: 'time',
  }, {
    title: '与会人数',
    key: 'count',
    dataIndex: 'count',
  }, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <Link to={`/confluence/${record.key}`}>详情</Link>
      </span>
    ),
  }]}
  get data() {
    return [{
        key: '1',
        name: '会议1',
        location: 'xxx',
        count: 122,
        time: '2018-08-22'
      }, {
        key: '2',
        name: '会议2',
        location: 'xxx',
        count: 123,
        time: '2018-08-22'
      }, {
        key: '3',
        name: '会议3',
        location: 'xxx',
        count: 344,
        time: '2018-08-22'
      }];
  }
  render() {
    return (
      <Table columns={this.columns} dataSource={this.data} />
    )
  }
}
