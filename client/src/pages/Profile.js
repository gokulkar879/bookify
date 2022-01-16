import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ChangeInfo from './ChangeInfo'
import Info from './Info'
import {useJwt} from 'react-jwt'
import './Profile.css'
import { useHistory } from 'react-router-dom'

function Profile() {
    const history = useHistory();
    const {decodedToken,isExpired}=useJwt(localStorage.getItem('token'));
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [imageURL, setimgURL] = useState("");
    const [edit, setEdit] = useState(0)
    console.log(decodedToken);
    useEffect(()=>{
        console.log(decodedToken);
        console.log(decodedToken);
        // const token=localStorage.getItem('token');
        if(decodedToken){
            setUserName(decodedToken.name);
            setEmail(decodedToken.email);
            setimgURL(decodedToken.imageURL);
            console.log(userName);
            console.log(imageURL);
            const user=decodedToken.name;
            if(!user){
                localStorage.removeItem('token');
                history.push("/");
            }else{
                console.log("USER LOGGED IN!");
            }
        }
    })
    return (
        <div className='profile'>
            <Header />
            <div className='profile__center '>
                <div className='profile__left'>
                    <img src={imageURL}></img>
                    <p>Total likes - {0}</p>
                    <p className='profile__email'>{email}</p>
                    
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
