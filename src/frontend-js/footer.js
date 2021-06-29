import React from 'react'
import '../frontend-scss/footer.css'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
export default function Footer() {
    return (
        <div className='footerWrapper'>
            <div className='footerWrapper'>
                <div className='footerSections sm-8 md-8 lg-8 xs-8'>
                    <div className='aboutSection'>
                        <h1 className='footerAboutSectionHeader'>About me</h1>
                        <p> I am a young fullstack javascript developer. I've been writing code from the winter of 2016 up until this day. The projects that I have the most experience on are the webstore kind of projects that you can find in my projects page. The tech stack that I use and am the most comfortable with is ReactJS with Bootstrap, SCSS & JQuery, ExpressJS+NodeJS, MySQL, MSSQL Server and Redux.</p>
                    </div>
                    <div className='biggestProjectSection'>
                        <h1 className='biggestProjectSectionHeader' >Biggest projects</h1>
                        <p> My biggest projects are a two E-Commerce websites, a food ordering website, a project manager and a flappy-bird game written in Python. I am really proud of those projects of mine.</p>
                    </div>                  
                    <div className='contactSection'>
                        <h1 className='contactsSectionHeader'>Contacts</h1>
                        <p>You can go over to my GitHub through this link:</p>
                        <p className='githubLinkContainer'><a className='githubLink' href='https://github.com/GoofyGalaxy374?tab=repositories'><FaGithub size={25}/> GitHub</a></p>
                    </div>  
                </div>
            </div>
        </div>
    )
}
