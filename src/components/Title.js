
import React from 'react';
import {BrowserRouter, Link } from 'react-router-dom'

const home = (props) => {
    return (
        <div className='home'>
            <h1>Home</h1>
            </div>
    )
}

const login = (props) => {
    return (
        <div className='login'>
            <h1>Login</h1>
            </div>
    )
}

const posts = (props) => {
    return ( 
        <div className="posts">
            <h1>Posts</h1>
            </div>
    )
}
const Title = (props) => {
    return (
        <div id='container'>
        <header id="header">
            <h1>Stranger's Things</h1>
        </header>

            <div id='navbar'>
                <Link to="/Home" style={{ color: '#ff1515'}}>Home</Link>
                <Link to="/Posts" style={{color: '#ff1515'}}>Posts</Link>
                {/* change login */}
                <Link to="/account/Login" style={{color: '#ff1515'}}>Login</Link>
                <Link to="/account/Register" style={{color: '#ff1515'}}>Register</Link>
            </div>
        </div>
    )
}


export default Title;
