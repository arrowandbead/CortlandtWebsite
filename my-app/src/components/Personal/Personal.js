import { Component } from 'react';
import React from "react"
import "./Personal.css"
import PictureList from "./pictureList"

class Personal extends Component{
    render(){
        return(
            <div className='contentHolderInner'>

                <div className='pictureHolder'>
                    <div className='pictureHolderInner'>
                        {PictureList}
                    </div>
                </div>
                <div className='otherContentHolder'>
                    <div className='titleBanner'>Cort</div>
                    <div className='mainContent'></div>
                </div>
            </div>
        )
    }
}

export default Personal;