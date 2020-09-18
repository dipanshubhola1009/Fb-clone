import React, { Component } from 'react'
import './MainContainer.css'
import SideNav from './SideNav';
import Postarea from './Postarea'
import RightWidget from './RightWidget';
export default class MainContainer extends Component {
    
    render() {
        
        return (
           <div className="MainContainer">
                <SideNav user ={this.props.user}/>
                <Postarea user ={this.props.user}  />
                <RightWidget  />
           </div>
        )
    }
}
