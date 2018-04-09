import React from 'react'
import './hello.less'

let Hello =React.createClass({
    render(){
        return (
            <div className="hello-components">
                Hello world,React webpack
            </div>
        );
    }
});

export default Hello;