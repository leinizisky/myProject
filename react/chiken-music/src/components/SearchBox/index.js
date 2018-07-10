import React,{ Component } from 'react'
import './style.less'

class SearchBox extends Component{

	static defaultProps = {
        placeholder: '搜索歌曲、歌手',
        query: ''
    }

	render(){
		let {query,placeholder}=this.props
		return(
			<div className="search-box" >
	            <i className="icon-search" ></i>
	            <input value={query} onChange={this.handleChange} type="text" className="box" placeholder={placeholder} />
	            <i className="icon-dismiss" onClick={this.clearQuery} style={{ display: query ? '' : 'none' }}  ></i>
            </div>
		)
	}
}

export default SearchBox