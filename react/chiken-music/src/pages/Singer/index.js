import React,{ Component } from 'react'
import axios from 'axios'
import ListView from 'components/ListView'
import SingerDataObj from 'common/js/singer'
import './style.less'

const HOT_NAME = '热门'
const HOT_SINGER_LEN = 10

class Singer extends Component{

	constructor(props){
		super(props);
		this.state={
			singers:[]
		}
	}

	render(){
		return(
			<div className='singer'>
				<ListView listData={this.state.singers} />
			</div>
		);
	}

	componentDidMount(){
		axios.get('/api/singer.js').then((res) => {
			this.setState({
				singers:this._normalizeSingerList(res.data.data)
			});
		});
	}

	_normalizeSingerList(list) {
	    let map = {
	      hot: {
	        title: HOT_NAME,
	        items: []
	      }
	    }

	    list.forEach((item, index) => {
	      if (index < HOT_SINGER_LEN) {
	        map.hot.items.push(
	          new SingerDataObj({
	            name: item.Fsinger_name,
	            id: item.Fsinger_mid
	          })
	        )
	      }
	      const key = item.Findex
	      if (!map[key]) {
	        map[key] = {
	          title: key,
	          items: []
	        }
	      }

	      map[key].items.push(
	        new SingerDataObj({
	          name: item.Fsinger_name,
	          id: item.Fsinger_mid
	        })
	      )
	    })

	    let ret = []
	    let hot = []
	    for (const key in map) {
	      if (map.hasOwnProperty(key)) {
	        let val = map[key]
	        if (val.title.match(/[a-zA-Z]/)) {
	          ret.push(val)
	        } else if (val.title === HOT_NAME) {
	          hot.push(val)
	        }
	      }
	    }

	    ret.sort((a, b) => {
	      return a.title.charCodeAt(0) - b.title.charCodeAt(0)
	    })
	    return hot.concat(ret)
  	}

}

export default Singer;