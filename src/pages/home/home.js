import React, { Component } from 'react'
import Banner from './components/banner/banner'
import Info from './components/info/info'
import List from './components/list/list'
import Nav from './components/nav/nav'

export default class Home extends Component{
    render(){
        return(
            <div>
                <Info></Info>
                <Banner></Banner>
                <Nav></Nav>
                <List></List>
            </div>
        )
    }
}