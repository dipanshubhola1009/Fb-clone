import React, { Component } from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon  from '@material-ui/icons/HomeOutlined';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import FlagIcon from '@material-ui/icons/FlagOutlined';
import { Avatar } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export class Header extends Component {
    render() {
        return (
            <div className="header">
              <div className="header-left">
                 <img src="https://cdn.iconscout.com/icon/free/png-512/facebook-235-569311.png" alt="icon"/>
                 <div className="Search">
                     <SearchIcon />
                     <input placeholder="Search Facebook" />
                 </div>
              </div>
              <div className="header-mid">

                  <div className="header-option header-active">
                     <HomeIcon  fontSize="large" />
                      
                  </div>
                  <div className="header-option">
                     <FlagIcon fontSize="large" />

                  </div>
                  <div className="header-option">
                  <VideoLibraryIcon  fontSize="large"/>

                  </div>
                  <div className="header-option">
                  <StorefrontIcon fontSize="large"/>

                  </div>
                  <div className="header-option">

                  <SupervisedUserCircleIcon fontSize="large" />
                  </div>

                  
              </div>
              <div className="header-right">
                  <div className="profile">

                  <Avatar src={this.props.user.photoURL} />
                  <h3>{this.props.user.displayName}</h3>
                  </div>

                  <AddCircleIcon  className="right-option"  />
                  <ForumIcon  className="right-option" />
                  <NotificationsActiveIcon  className="right-option" />
                  <ArrowDropDownIcon  className="right-option"/>
 
              </div>
            </div>
        )
    }
}

export default Header
