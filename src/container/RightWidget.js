import React, { Component } from 'react'
import './MainContainer.css'
export default class RightWidget extends Component {
    render() {
        return (
            <div className='RightWidget'>
         <iframe title="Facebook" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="700"  scrolling="no"  allow="encrypted-media"></iframe>
           </div>
        )
    }
}
