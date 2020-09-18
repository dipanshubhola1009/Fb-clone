import React, { Component } from 'react'
import SidenavComponent from '../component/SidenavComponent'
import FlagIcon from '@material-ui/icons/Flag';
import GroupIcon from '@material-ui/icons/Group';
import ForumIcon from '@material-ui/icons/Forum';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
export default class SideNav extends Component {
    render() {
        return (
            <div className="SideNav">
                <SidenavComponent avatar={this.props.user.photoURL} cname={this.props.user.displayName} />
                <SidenavComponent  Icon={FlagIcon} cname="Pages" />
                <SidenavComponent  Icon={GroupIcon} cname="Groups" />
                <SidenavComponent  Icon={ForumIcon} cname="Messenger" />
                <SidenavComponent  Icon={DateRangeIcon} cname="Events" />
                <SidenavComponent  Icon={ArrowDropDownIcon} cname="MarketPlace" />
          
            </div>
        )
    }
}

