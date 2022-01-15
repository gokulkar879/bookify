import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../components/Header'
import { GoogleLogin } from 'react-google-login'
import './Signin.css'


function Signin() {
    const [error, setError] = useState('')
    const history = useHistory()
    const responseGoogle = async response => {
        try {
           let id = await response['googleId']
           let profile = await response['profileObj']
           console.log(id, profile)
           fetch("http://localhost:5000/auth", {
               method: 'POST',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify({"id": id, "data": profile})
           }).then(res => res.json())
           .then(res => {
               console.log(res)
           })
        } catch (err) {
            setError('Sorry could not signin')
        }
    }
    return (
        <div className='signin'>
           <Header />
           <div className='signin__center'>
               {error && <p style={{"color":"red"}}>{error}</p>}
               <div className='signin__comp'>
                <img src="https://www.w3schools.com/w3images/avatar6.png" alt="avatar"></img>
                    <GoogleLogin
                    clientId="707587973330-gr5v6s294mbn0o29rjtbbah2ip40qf64.apps.googleusercontent.com"
                    buttonText="Sign in With Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    className="google_button"
                    />
               </div>
           </div>
        </div>
    )
}

export default Signin
