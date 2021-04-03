import React from 'react'
import { Link } from 'react-router-dom'
import picLogo  from '../../img/logo192.png'
import { Button } from 'react-bootstrap'
import './nav.css'



export const Nav = () => {
    return (
        <>

            <nav >
                <div className="pages">
                    <div className="brand">
                        <img src={picLogo} className='logo' alt="logo" />
                    </div>
                    <div className="pages_container">
                        <Link to='/'>Home</Link>
                    </div>
                </div>
                <div className="btn_containers">
                    <Link to="/login" >LogIn</Link>
                    <Link to="/signup" >SignUp</Link>
                </div>
            </nav>


        </>
    )
}


