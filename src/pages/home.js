import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom'

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        Home
        <div>
          <Link to='/signin'>退出登录</Link>
        </div>
      </div>
    )
  }
}
