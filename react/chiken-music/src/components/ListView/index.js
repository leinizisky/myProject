import React, { Component,Fragment } from 'react'
import './style.less'

class ListView extends Component {

   render(){
    let { listData } = this.props;
    this.groupList=[];
   	return (
   		<Fragment>
        <ul className="listview">
          {
            listData.map((group,i) => {
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
      </Fragment>
   	);
   }
}

export default ListView;
