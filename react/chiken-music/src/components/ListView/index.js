import React, { Component,Fragment } from 'react'
import Scroll from 'components/Scroll'

import './style.less'

const defaultImg = require('common/image/default.png')
const ANCHOR_HEIGHT = 18
const TITLE_HEIGHT = 20

class ListView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // 侧边栏导航数据
      shortcutList: [],
      currentIndex: 0,
      fxiedShow: false
    }
    this.handleBScroll=this.handleBScroll.bind(this);
   }

   render(){
    this.groupList = []
   	return (
   		<Scroll
        className="listview"
        probeType={3}
        listenScroll={true}
        onScroll={this.handleBScroll}
        ref={listview => {
          this.listview = listview
        }}
      >
        <ul className="listview">
          {
            this.props.listData.map((group,i) => {
              return (
                <li 
                  key={i}
                  className="list-group"
                  ref={group => {
                    if (group) {
                      this.groupList.push(group)
                    }
                  }}
                >
                  <h2 className="list-group-title">{group.title}</h2>
                  <ul>
                    {
                      group.items.map((item,index) => (
                        <li
                          key={index}
                          className="list-group-item"
                        >
                          <img className="avatar" src={item.avatar} alt="" />
                          <span className="name">{item.name}</span>
                        </li>
                      ))
                    }
                  </ul>
                </li>
              )
            })
          }
        </ul>
      </Scroll>
   	);
   }

   handleBScroll(pos) {
    // console.log(arguments)
    //forceCheck()
    if (pos) {
      this._calcullateCurrentIndex(pos.y)
      if (pos.y > 0) {
        if (this.state.fxiedShow) {
          this.setState({
            fxiedShow: false
          })
        }
      } else {
        if (!this.state.fxiedShow) {
          this.setState({
            fxiedShow: true
          })
        }
      }
    }
  }

  _calcullateCurrentIndex(newScrollY) {
    const listHeight = this.listHeight
    // 当滚动到顶部
    if (newScrollY > 0) {
      // this.currentIndex = 0;
      this._updataCurrentIndex(0)

      return false
    }
    for (let i = 0; i < listHeight.length; i++) {
      const height1 = listHeight[i]
      const height2 = listHeight[i + 1]

      // 在中间滚动
      if (-newScrollY >= height1 && -newScrollY < height2) {
        this._updataCurrentIndex(i)
        this.diff = height2 + newScrollY
        this._calcullateDiff(this.diff)
        return false
      }
    }
    this._updataCurrentIndex(listHeight.length - 2)
  }

  _calcullateDiff(diff) {
    let fxiedTop = diff > 0 && diff < TITLE_HEIGHT ? diff - TITLE_HEIGHT : 0

    if (this.fxiedTop === fxiedTop) {
      return
    }
    this.fxiedTop = fxiedTop
    this.fixed.style.transform = `translate3d(0,${fxiedTop}px,0)`
  }

  _updataCurrentIndex(newCurrentIndex) {
    if (newCurrentIndex === this.state.currentIndex) {
      return
    }
    this.setState({
      currentIndex: newCurrentIndex
    })
  }

  _scrollTo(index) {
    // console.log(index)
    if (!index && index !== 0) {
      return
    }

    if (index < 0) {
      index = 0
    } else if (index > this.listHeight.length - 2) {
      index = this.listHeight.length - 2
    }

    this._calcullateCurrentIndex(-this.listHeight[index])
    // this._updataCurrentIndex(index)
    // console.log(this.groupList)
    this.listview.scrollToElement(this.groupList[index], 0)
    this.listview.enable()
    //forceCheck()
  }

  _calcullateHeight() {
    this.listHeight = []
    const list = this.groupList
    let height = 0
    this.listHeight.push(height)
    for (let index = 0; index < list.length; index++) {
      const item = list[index]
      height += item.clientHeight
      this.listHeight.push(height)
    }

    // console.log(this.listHeight)
  }
}

export default ListView;
