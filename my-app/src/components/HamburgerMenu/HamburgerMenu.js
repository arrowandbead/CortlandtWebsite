import { Component } from 'react';
import React from "react"
import "./HamburgerMenu.css"
// import Hamburger from 'hamburger-react'
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

import menuItemInfo from "./menuItemInfo.js"

class HamburgerMenu extends Component{
    constructor(props){
        super()
        this.state = {
            navbarOpen : false,
            menuItemInfo : menuItemInfo
        }
        this.generateListItems = this.generateListItems.bind(this)
    }

    toggle() {
        this.setState({navbarOpen : !this.state.navbarOpen})
    }

    generateListItems(){
        return(
            menuItemInfo.map((item) =>
            this.state.navbarOpen ?
            <li key = {item.key} className="openedListItem">
                <a href={item.link}>{item.name}</a>
            </li> :
            <li key={item.key} className="minimizedListItem">
                <a href={item.link}>
                    <item.minimizedIcon size={30}>
                    </item.minimizedIcon>
                </a>
            </li>)
        )
    }

    render(){
        return(
            <nav className="navBar">
                <button className="hamburgerButton" onClick={this.toggle.bind(this)}>
                {this.state.navbarOpen ? 
                    (<MdClose style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />)
                    :
                    (<FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />)
                    }
                </button>
                <ul className={`menuNav ${this.state.navbarOpen ? " showMenu" : ""}`}>
                    {this.generateListItems()}
                </ul>

            </nav>
        )
    }
}


export default HamburgerMenu