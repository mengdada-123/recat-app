import React, { Component } from 'react'
import Header from "../../components/Header"
import {Link} from "react-router-dom"
export default class Register extends Component {
    render() {
        return (
            <div>
                <Header title="注册" back></Header>
                <div className='loginBox'>
                <div><b className='IBox'>手机号</b><input type="text" className='inputBox'/></div>
                <div><b className='IBox'>昵称：</b><input type="text" className='inputBox'/></div>
                <div><b className='IBox'>密码：</b><input type="text" className='inputBox'/></div>
                <div className="btn btnBox">
                <Link to="/login">注册</Link>
                </div>
                </div>
            </div>
        )
    }
}
