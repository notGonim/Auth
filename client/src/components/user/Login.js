import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './login.css'

import { clearErrors, login } from '../../reducers/user/user-actions'

export const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { isAuthenticated, error, loading } = useSelector(state => state.user)

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(clearErrors())

    }, [dispatch, isAuthenticated, error])

    return (
        <>
            <div className="login_container">
                <h1 >LogIn</h1>
                <div className="form_container">
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Write Your Email " />
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Write Your Password" />
                    <button className="btn_login"> Login</button>
                </div>
                <p>if you don`t have an account <Link to='/signup' className="span_color">Create new account</Link></p>
            </div>
        </>
    )
}
