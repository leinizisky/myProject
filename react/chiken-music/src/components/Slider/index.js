import React, { Component } from 'react'
import './style.less'
import BScroll from 'better-scroll'
import PropTypes from 'prop-types'
import { addClass } from 'common/js/dom'

class Slider extends Component{

	constructor(props) {
    super(props)
    this.state = {
      // 轮播图轮播标识点数据
      dots: [],
      // 轮播如当前的页数
      currentPageIndex: 0
    }
  }

  static defaultProps = {
    loop: true,
    autoPlay: true,
    interval: 4000
  }

  static propTypes = {
    // 是否无限滚动
    loop: PropTypes.bool.isRequired,
    // 是否自动轮播
    autoPlay: PropTypes.bool.isRequired,
    // 自动轮播的时间间隔
    interval: PropTypes.number.isRequired
  }

	render(){
		let { dots, currentPageIndex } = this.state
		return(
			<div className="slider" ref="slider">
        <div className="slider-group" ref={sliderGroup => {this.sliderGroup = sliderGroup}}>
          {this.props.children}
        </div>
        <div className="dots">
          {dots.map((item, index) => (
            <span
              className={`dot ${currentPageIndex === index ? 'active' : ''}`}
              key={index}
            />
          ))}
        </div>
      </div>
		);
	}
	componentDidMount() {
	  this._setSliderWidth()
    this._initDots()
    this._initSlider()
    if (this.props.autoPlay) {
      this._play()
    }
    window.addEventListener('resize', () => {
      if (!this.slider) {
        return
      }
      this._setSliderWidth(true)
      this.slider.refresh()
    })
  }

  _setSliderWidth(isResize) {
    this.children = Array.prototype.slice.apply(this.sliderGroup.children)
    let width = 0
    let sliderWidth = this.refs.slider.clientWidth
    let childrenLen = this.children.length
    for (let i = 0; i < childrenLen; i++) {
      let child = this.children[i]
      addClass(child, 'slider-item')
      child.style.width = sliderWidth + 'px'
      width += sliderWidth
    }

    if (this.props.loop && !isResize) {
      width += 2 * sliderWidth
    }

    this.sliderGroup.style.width = width + 'px'
  }

  _initSlider() {
    this.slider = new BScroll(this.refs.slider, {
      scrollX: true,
      scrollY: false,
      momentum: false,
      snap: {
        loop: this.props.loop,
        threshold: 0.3,
        speed: 400
      },
      bounce: false,
      stopPropagation: true,
      click: true
    })

    this.slider.on('scrollEnd', () => {
      let pageIndex = this.slider.getCurrentPage().pageX
      this.setState(
        {
          currentPageIndex: pageIndex
        },
        () => {
          if (this.props.autoPlay) {
            clearTimeout(this.timer)
            this._play()
          }
        }
      )
    })
  }

   _play() {
    this.timer = setTimeout(() => {
      this.slider.next()
    }, this.props.interval)
  }

  _initDots() {
    let dots = []
    for (let i = 0; i < this.children.length; i++) {
      dots.push(1)
    }
    this.setState({
      dots: dots
    })
  }

}

export default Slider;
