import React from 'react';
import './Side.css'
import { Avatar } from '@material-ui/core';


function SidenavComponent({avatar,cname,Icon}) {
    return (
        <div className="Side-component">
           {avatar? <Avatar className="Avatar" src={avatar} /> : <></>}  
           {Icon ? <Icon className="SideIcon" ></Icon>  : <></> }
            <h4>{cname}</h4>   
        </div>
    )
}

export default SidenavComponent
