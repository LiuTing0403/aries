import React, {PureComponent} from 'react'
import {Table} from 'antd'

export default class Detail extends PureComponent {
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
    dataIndex: 'company',
    key: 'company'
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
    dataIndex: 'idType',
    key: 'idType',
  }, {
    title: '证件号码',
    dataIndex: 'id',
    key: 'id',
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
    return (
      <div className='detail'>
        <h2>国庆招待会</h2>
        <p>会议时间：2018-10-01</p>
        <p>会议地点：xxxxxxx</p>
        <p>会议状态：报名中</p>
        <Table columns={this.columns} dataSource={this.data} />
      </div>
    )
  }
}
