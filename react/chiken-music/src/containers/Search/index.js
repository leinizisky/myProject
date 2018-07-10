import React,{ Component } from 'react'
import SearchBox from 'components/SearchBox'
import './style.less'

class Search extends Component{

	constructor(props){
		super(props)
		this.state={
			query:'',
			hotKey:[1,2,3]
		}
	}

	render(){
		let {query,hotKey}=this.state
		return(
			<div className="search">
				<div className="search-box-wrapper" >
			      <SearchBox query={query} />
			  </div>
			  <div className="shortcut-wrapper">
				  <div className="shortcut">
						<div className="hot-key" >
              <h1 className="title" >热门搜索</h1>
              <ul>
                {
                  hotKey.map((item, index) => <li className="item" key={index} onClick={() => { this.setStateQuery(item.k) }} >
                    <span  >{item.k}</span>

                  </li>)

                }
              </ul>
           	</div>
				  </div>
			  </div>
			</div>
		);
	}
}

export default Search