import React, {PureComponent} from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import {Menu, Icon, Layout} from 'antd'

import CreateForm from './create'

import './styles/home.css'

const MenuItem = Menu.Item
const {Header, Content, Sider} = Layout

export default class Home extends PureComponent {
  renderSider() {
    return (
      <div className='sideMenu'>
        <Menu
          defaultSelectedKeys={[this.props.location.pathname]}
          mode="inline"
          theme="dark">
          <MenuItem key='/create'>
            <Link to='/create'>
              <Icon type="plus-circle" />
              <span>创建会议</span>
            </Link>
          </MenuItem>
          <MenuItem key='/all'>
            <Link to='/all'>
              <Icon type="book" />
              <span>会议列表</span>
            </Link>
          </MenuItem>
        </Menu>
        <Link to='/signin' className='exitBtn'>
          <Icon type="logout" />
          <span>退出登录</span>
        </Link>
      </div>
    )
  }
  render() {
    console.log(this.props.match)
    return (
      <div className='home'>
        <Layout>
          <Header className='header'>
            <h1>会议管理系统</h1>
          </Header>
          <Layout>
            <Sider>{this.renderSider()}</Sider>
            <Content>
              <Switch>
                <Route path={`${this.props.match.url}create`} component={CreateForm}/>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}
