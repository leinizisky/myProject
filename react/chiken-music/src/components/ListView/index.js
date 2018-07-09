import React, { Component } from 'react'
//import Scroll from 'components/Scroll'

import './style.less'

//const defaultImg = require('common/image/default.png')
const ANCHOR_HEIGHT = 18
const TITLE_HEIGHT = 20

class ListView extends Component {
  // static defaultProps = {
  //   listData: []
  // }

  // static propTypes = {
  //   listData: PropTypes.array.isRequired
  // }

  constructor(props) {
    super(props)
    this.state = {
      // 侧边栏导航数据
      shortcutList: [],
      currentIndex: 0,
      fxiedShow: false
    }
   }
   render(){
   	return (
   		<div>singerList111111111</div>
   	);
   }
}

export default ListView;
