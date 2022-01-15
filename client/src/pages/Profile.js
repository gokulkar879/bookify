import React, { useState } from 'react'
import Header from '../components/Header'
import ChangeInfo from './ChangeInfo'
import Info from './Info'
import './Profile.css'


function Profile() {
    const [edit, setEdit] = useState(0)
    return (
        <div className='profile'>
            <Header />
            <div className='profile__center '>
                <div className='profile__left'>
                    <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg"></img>
                    <p>Total likes - {0}</p>
                    <p className='profile__email'>Email - hemlo@gmail.com</p>
                    
                </div>
                <div className='profile__right'>
                    {edit ? <ChangeInfo /> : <Info />}
                    <button onClick={() => setEdit(!edit)}>{edit?"Back":"Edit"}</button>
                </div>
            </div>

        </div>
    )
}

export default Profile
