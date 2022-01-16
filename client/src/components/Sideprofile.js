import React from 'react'
import { Link } from 'react-router-dom'
import './Sideprofile.css'

function Sideprofile() {
    console.log(localStorage.getItem('token'));
    return (
        <div className='sideProfile'>
            <div className='sideProfile__header'>
                <img src="https://www.w3schools.com/howto/img_avatar2.png"></img>
            </div>
            <div className='sideProfile__center'>
                <Link to="/profile">Gokul Karki</Link>
                <p>Total Likes - {0}</p>
            </div>
        </div>
    )
}

export default Sideprofile
