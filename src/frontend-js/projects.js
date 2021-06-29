import React from 'react'
import Header from './header'
import Footer from './footer'
import '../frontend-scss/projects.css'
import { Component } from 'react'
import $ from 'jquery'
export default class projects extends Component {
    constructor(props){
        super(props);
        this.state={
            projectsList:[
                {
                    name: 'Dropshipping',
                    stack: 'ReactJS, Redux, Bootstrap, MySQL, SCSS, NodeJS, ExpressJS',
                    duration: '3 months',
                    link: 'https://github.com/GoofyGalaxy374/Dropshipping'
                },
                {
                    name: 'E-commerce',
                    stack: 'ReactJS, Redux, Bootstrap',
                    duration: '1 month',
                    link: 'https://github.com/GoofyGalaxy374/E-commerce'
                },
                {
                    name: 'Foodr',
                    stack: 'ReactJS',
                    duration: '3 weeks',
                    link: 'https://github.com/GoofyGalaxy374/Foodr'
                },
                {
                    name: 'Project Manager',
                    stack: 'ReactJS, Bootstrap, SCSS, JQuery, Redux,MYSQL',
                    duration: '1 week',
                    link: 'https://github.com/GoofyGalaxy374/ProjectManager'
                },
                {
                    name: 'Portfolio',
                    stack: 'ReactJS',
                    duration: '2 days',
                    link: 'https://github.com/GoofyGalaxy374/portfolioReact/tree/master'
                },
                {
                    name: 'FlappyBird remake',
                    stack: 'Python, PyGame',
                    duration: '2 hours',
                    link: 'https://github.com/GoofyGalaxy374/Flappy-Bird-Remake'
                },
            ]
        }
    }
    componentWillMount(){

            setTimeout(()=>$('.projectsList').fadeIn('slow'), 550)

    }
    render() {
        return (
            <div className='projectsWrapper'>
                <Header/>
                <div className='projectsList'>
                    {this.state.projectsList.map(project=>
                    <div className='projectWrapper'>
                        <p className='projectName'><strong>Project Name:</strong> <br/>{project.name}</p>
                        <p className='projectStack'><strong>Project Stack: </strong><br/>{project.stack}</p>
                        <p className='projectDuration'><strong>Project Duration:</strong> <br/>~{project.duration}</p>
                        <a href={project.link} className='projectLink'> <p>Project Link </p></a>
                        <hr/>
                    </div>)}
                </div>

            </div>
        )
    }
}

