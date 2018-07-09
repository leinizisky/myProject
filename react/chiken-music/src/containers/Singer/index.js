import React,{ Component } from 'react'
//import { Route } from 'react-router-dom'
//import { getSingerList } from 'api/singer'
//import ListView from 'components/ListView'
//import SingerDetail from 'containers/SingerDetail'
import './style.less'

const HOT_NAME = '热门'
const HOT_SINGER_LEN = 10

class Singer extends Component{

	// constructor(props){
	// 	super(props);
	// 	this.state={
	// 		singers:[]
	// 	}
	// }

	render(){
		return(
			<div className='singer'>
				{/*<ListView
		          handleClick={this.handleClick}
		          listData={this.state.singers}
		        />
		        <Route path="/singer/:id" component={SingerDetail} />*/}
		        hello
			</div>
		);
	}


}

export default Singer;