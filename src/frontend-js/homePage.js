import React,{useEffect, useState} from 'react'
import Header from './header'
import Footer from './footer'
import '../frontend-scss//homePage.css'
import {Button} from 'react-bootstrap'
import $ from 'jquery'
import {SiTypescript,SiMongodb, SiJest} from 'react-icons/si' 
import {FaVuejs} from 'react-icons/fa'
export default function HomePage() {
    useEffect(()=>{
        setTimeout(()=>$('.welcomeTextContainer').fadeIn('slow'), 550)
        setTimeout(()=>$('.projectsStatisticsContainer').fadeIn('slow'), 1050)
        setTimeout(()=>$('.techStackContainer').fadeIn('slow'), 1250)
        setTimeout(()=>$('.futureGoals').fadeIn('slow'), 1250)


    },[])
    const[projects, addProject]=useState([
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
    ])
    return (
        <div className='pageWrapper'>
            <div className='HeaderContainer'>
                <Header/>
            </div>
            <div className='MainContainer'>
                <div className='welcomeTextContainer'>
                    <p className='welcomeText'>Hello, I am Martin!</p>
                    <p className='welcomeSubText'>I am a fullstack JavaScript developer.</p>
                </div>
                <div className='projectsStatisticsContainer'>
                    <p className='projectsStatistics'>A bit of numbers.</p>

                    <p className='projectsCompleted'>{projects.length} projects completed as of today.</p>
                </div>
                <div className='techStackContainer' id='TechStack'>
                    <p className='techStackHeading'>My TechStack: </p>

                    <p className='techStackInfo'>ReactJS, SCSS, JQuery, Bootstrap, Redux, NodeJS, ExpressJS, MySQL</p>


                </div>
                <div className='futureGoals' id='Goals'>
                    <p className='futureGoalsHeading'>My Future Goals: </p>
                    <p className='FutureGoal'><SiTypescript size={50}/> TypeScript, <FaVuejs size={50}/> VueJS, <SiJest size={50}/> Jest Unit Testing and <SiMongodb size={50}/> MongoDB</p>

                </div>
            </div>
          
        </div>
    )
}
