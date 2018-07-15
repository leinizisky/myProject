import React,{ Component } from 'react'
import axios from 'axios'
import Slider from 'components/Slider'
import './style.less'

class Recommend extends Component{

	constructor(props) {
	    super(props)
	    this.state = {
	      recommends: [],
	      songList:[]
	    }
	  }

	render(){
		let { recommends,songList } = this.state;
		return(
			<div className='recommend-wrapper'>
				{
					recommends.length ? (
	          <Slider>
	            {
	            	recommends.map((item, index) => (
		              <a href={item.linkUrl} key={index}>
		                <img src={item.picUrl} alt="" />
		              </a>
		            ))
	            }
	          </Slider>
		    	) : null
				}
				<div className='recommend-list'>
					<h3 className='title'>热门歌单推荐</h3>
					<ul>
						{
							songList.map((item) => (
								<li key={item.id} className='item'>
									<div className="icon">
										<img width="60" height="60" src={item.picUrl} alt="" />
									</div>
								  <div className="text">
	                  <h2 className="name">{item.songListAuthor}</h2>
	                  <p className="desc">{item.songListDesc}</p>
	                </div>
								</li>
							))
						}
					</ul>
				</div>
			</div>
		);
	}

	componentDidMount() {
	    axios.get('/api/recommend.js').then((res) => {
	    	const result=res.data.data;
			this.setState({
				recommends:result.slider,
				songList:result.songList
			});
		});
	}
}

export default Recommend;