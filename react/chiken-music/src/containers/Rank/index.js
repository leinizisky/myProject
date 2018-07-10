import React,{ Component } from 'react'
import axios from 'axios'
import './style.less'

class Rank extends Component{

	constructor(props) {
    super(props)
    this.state = {
      rankList: []
    }
  }

	render(){
		let { rankList } = this.state
		return (
			<div className="rank">
				<ul className="toplist">
            {
              rankList.map((item, i) => <li key={i} className="item" onClick={() => {this.selectItem(item)}} >
                <div className="icon" >
                  <img width="100" height="100" src={item.picUrl} />
                </div>
                <ul className="songlist" >
                  
                   {
                      item.songList.map((song, index) => <li key={index} className="song" >
                      <span>{index + 1}</span>
                      <span>{song.songname} - {song.sngername}</span>
                    </li>)
                   }

                </ul>
              </li>)
            }
          </ul>
			</div>
		);
	}

	componentDidMount(){
		axios.get('../api/rank.js').then((res) => {
			this.setState({
				rankList:res.data
			});
		});
	}

}

export default Rank