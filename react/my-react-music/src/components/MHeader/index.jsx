import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './style.less'

class MHeader extends Component {
  render() {
    return (
      <div className="m-header">
        <div className="icon" />
        <h1 className="text">Chiken Music</h1>
        <Link to="/user"  className="mine">
          <i className="icon-mine"></i>
        </Link>
      </div>
    )
  }
}

export default MHeader
