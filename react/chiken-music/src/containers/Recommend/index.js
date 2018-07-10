import React,{ Component } from 'react'
import axios from 'axios'
import './style.less'
import Slider from 'components/Slider'

class Recommend extends Component{

	constructor(props) {
	    super(props)
	    this.state = {
	      recommends: []
	    }
	  }

	render(){
		let { recommends } = this.state
		return(
			<div>
				{recommends.length ? (
          <Slider>
            {recommends.map((item, index) => (
              <a href={item.linkUrl} key={index}>
                <img src={item.picUrl} alt="" />
              </a>
            ))}
          </Slider>
        ) : null}
			</div>
		);
	}

	componentDidMount() {
    axios.get('../api/recommend.js').then((res) => {
			this.setState({
				recommends:res.data
			});
		});
  }


}

export default Recommend;