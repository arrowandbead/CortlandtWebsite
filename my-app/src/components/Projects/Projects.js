import { Component } from 'react';
import React from "react"
import ProjectObjects from "./ProjectObjects"
import "./Projects.css"

// awsmanagmentacc@gmail.com
class Projects extends Component{

    constructor(){
        super()
        this.state = {
            currProj : 0,
            projObjList : ProjectObjects
        }
        this.selectProject = this.selectProject.bind(this)
    }
    selectProject(event, obj){
        this.setState({currProj : obj.id})
    }
    render(){
        return(
            <div className='contentHolderInner'>

                <div className='pictureHolder'>
                    <div className='pictureHolderInner'>
                        {this.state.projObjList[this.state.currProj].imageList}
                    </div>
                </div>
                <div className='otherContentHolder'>
                    <div className='titleBanner'>Projects</div>
                    <div className='mainContent'>
                        <ul className='projList'>
                            {this.state.projObjList.map((obj) =>
                                <li key={obj.id} onClick={(e) => this.selectProject(e, obj)} className={this.state.currProj === obj.id ? "projListItem selectedItem" : "projListItem"}>
                                    <div className='projectTitleBar'>{obj.title}</div>
                                    <div className='descriptionHolder'>{obj.description}</div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;