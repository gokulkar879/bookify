import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


function Header() {
    return (
        <div className='header'>
            <div className='header__logo'>
                <Link to="/">Bookify</Link>
            </div>
            <div className='header__search'>
                <input></input>
            </div>
            <div className='header__account'>
                <Link to="/upload" style={{"marginRight":"35px"}}>Upload</Link>
                <Link to="/signin">SignIn</Link>
            </div>
        </div>
    )
}

export default Header
