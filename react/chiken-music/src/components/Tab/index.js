import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './style.less'

class Tab extends Component {
  render() {
    return (
      <div className="tab">
        <NavLink activeClassName=" router-link-active" to="/recommend">
          <span className="tab-link">推荐</span>
        </NavLink>
        <NavLink activeClassName=" router-link-active" to="/singer">
          <span className="tab-link">歌手</span>
        </NavLink>
        <NavLink activeClassName=" router-link-active" to="/rank">
          <span className="tab-link">排行</span>
        </NavLink>
        <NavLink activeClassName=" router-link-active" to="/search">
          <span className="tab-link">搜索</span>
        </NavLink>
      </div>
    )
  }
}

export default Tab