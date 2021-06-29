import React from 'react'
import '../frontend-scss/error.css'
import Header from './header'
import Footer from './footer'
export default function ErrorPage() {
    return (
        <div className='errorPageWrapper'>
            <Header/>
            <div className='errorMessageContainer'>
                <p className='errorMessage'>
                    <span className='doesntExistMessage'><strong>Error 404</strong></span>
                    <br/>
                    The page you're looking for does not exist.
                </p>
            </div>
        </div>
    )
}
