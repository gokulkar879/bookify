import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../components/Header'
import './Signin.css'


function Signin() {
    const [error, setError] = useState('')
    const history = useHistory()
    const handleSubmit = e => {
        e.preventDefault()
        setError('')
        fetch("http://localhost:5000/auth/signin")
        .then(res => {
            console.log("ppp")
            return res.json()
        })
        .then(data => {
            if(data.message == "authenticated") {
                console.log("hello")
                history.push("/")
            } else {
                setError('Error signing in')
            }
        })
    }
    return (
        <div className='signin'>
           <Header />
           <div className='signin__center'>
               {error && <p style={{"color":"red"}}>{error}</p>}
               <form onSubmit={handleSubmit}>
                   <img src="https://www.w3schools.com/w3images/avatar6.png" alt="avatar"></img>
                  <button type="submit">Sign In With Google</button>
               </form>
           </div>
        </div>
    )
}

export default Signin
