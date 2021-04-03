import React from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {
    return (
        <>
            <div className="login_container">
                <h1 >LogIn</h1>
                <div className="form_container">
                    <input type="text" placeholder="Write Your UserName " />
                    <input type="email" placeholder="Write Your Email " />
                    <input type="password" placeholder="Write Your Password" />
                    <button className="btn_sign"> SignUp</button>
                </div>
                <p>if you already having an account <Link to='/login' className="span_color">Login</Link></p>
            </div>
        </>
    )
}
