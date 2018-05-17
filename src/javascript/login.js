import React from 'react'
import ReactDOM from 'react-dom'
import '../less/login.less'

import('../javascript/my').then(res=>{
    const My=res.default;
    ReactDOM.render(
        <My/>,
        document.getElementById('app')
    )
})
export default class Welcome extends React.Component{
    render(){
        return <div className='title'><div></div>hello world guoquankai</div>
    }
}