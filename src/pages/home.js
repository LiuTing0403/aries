import React, {PureComponent} from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import {Menu, Icon, Layout} from 'antd'

import CreateForm from './create'
import AllHistory from './history'
import Detail from './detail'
import Setting from './setting'
import {logout} from '../libs/api'

import './styles/home.css'

const MenuItem = Menu.Item
const {Header, Content, Sider} = Layout

export default class Home extends PureComponent {
  signOut() {
    logout().then(res => {
      console.log(res)
      window.localStorage.removeItem('token')
      window.G.history.replace('/signin')
    })
  }
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
          <MenuItem key='/setting'>
            <Link to='/setting'>
              <Icon type='setting' />
              <span>重置密码</span>
            </Link>
          </MenuItem>
        </Menu>
        <div className='exitBtn' onClick={this.signOut}>
          <Icon type="logout" />
          <span>退出登录</span>
        </div>
      </div>
    )
  }
  render() {
    console.log(this.props.match, this.props.location.pathname)
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
                <Route path={`${this.props.match.url}all`} component={AllHistory} />
                <Route path={`${this.props.match.url}conference/:id`} component={Detail} />
                <Route path={`${this.props.match.url}setting`} component={Setting} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}
