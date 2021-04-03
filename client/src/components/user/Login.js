import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

export const Login = () => {
    return (
        <>
            <div className="login_container">
                <h1 >LogIn</h1>
                <div className="form_container">
                    <input type="email" placeholder="Write Your Email " />
                    <input type="password" placeholder="Write Your Password" />
                    <button className="btn_login"> Login</button>
                </div>
                <p>if you don`t have an account <Link to='/signup' className="span_color">Create new account</Link></p>
            </div>
        </>
    )
}
