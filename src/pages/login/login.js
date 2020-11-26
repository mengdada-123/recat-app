import React, { Component } from 'react'
import Header from '../../components/Header'
import './login.styl'
import {Link} from "react-router-dom"
export default class Login extends Component{
    render(){
        return(
            <div>
                <Header title='登录' register></Header>
                <div className='loginBox'>
                <div>
                  <b className='IBox'>账号:</b> <input type='text' className='inputBox'/>
                </div>
                <div>
                <b className='IBox'>密码:</b><input type='text' className='inputBox'/>
                </div>
                <div>
                    <span className='pawssBox'>忘记密码</span>
                </div>
                {/* <div className="btn btnBox" >登录</div> */}
                <div  className="btn btnBox">
                <Link to="/index/home">登录</Link>
                </div>
                </div>   
            </div>
        )

    }
}