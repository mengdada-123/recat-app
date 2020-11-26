import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

import Login from "./pages/login/login"
import Index from './pages/index/index'
import List from './pages/list/list'
import Register from './pages/register/register'
import Detail from './pages/detail/detail'
import './App.styl'
export default function App() {
  return (
    <div className='app'>
     {/* 一级路由出口 */}
     <Switch>
       <Route path='/login' component={Login}></Route>
       <Route path='/index' component={Index}></Route>
       <Route path='/list' component={List}></Route>
       <Route path='/register' component={Register}></Route>
       <Route path='/detail' component={Detail}></Route>
       <Redirect to='/login'></Redirect>
     </Switch>
    </div>
  )
}
