import React from 'react'
import ReactDOM from 'react-dom'
import '../less/login.less'
import loadable from '@loadable/component'

const C=loadable(()=>import('../javascript/my'))
export default class Welcome extends React.Component{
    render(){
        return <div className='title'>
            <C />
            hello world guoquankai
        </div>
    }
}