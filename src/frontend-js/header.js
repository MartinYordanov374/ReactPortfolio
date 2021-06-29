import React from 'react'
import {Navbar, Nav, NavbarBrand} from 'react-bootstrap'
import {FaGithubAlt} from 'react-icons/fa'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../frontend-scss/header.css'
export default function Header() {
    return (
        <div className='headerCompContainer'> 
            <Navbar className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <Nav.Item className='navbar-nav mr-auto justify-content-between'>
                        <Nav.Link className='nav-link mx-5 mr-auto' href='/home'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='navbar-nav mr-auto'>
                        <Nav.Link className='nav-link mx-5' href='/projects'><AiOutlineFundProjectionScreen size={30}/> My projects</Nav.Link>
                    </Nav.Item>

                    <NavbarBrand className='mx-auto mr-auto brand' href='/home'><strong>M</strong></NavbarBrand>
                    
                    <Nav.Item className='navbar-nav mr-auto'>
                        <Nav.Link className='nav-link Github mx-5' href='https://github.com/GoofyGalaxy374'><FaGithubAlt size={30}/> Github</Nav.Link>
                    </Nav.Item>
                                        
                    <Nav.Item className='navbar-nav mr-auto'>
                        <Nav.Link className='nav-link About mx-5' href='#TechStack'>About</Nav.Link>
                    </Nav.Item>
                </Navbar>
        </div>
    )
}
