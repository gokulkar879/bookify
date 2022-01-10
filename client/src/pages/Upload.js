import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Header from '../components/Header'
import './Upload.css'


function Upload() {
    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const history = useHistory()

    const handleSubmit = e => {
        let data = {
            "title": title,
            "name": name,
            "description": description
        }
        // console.log(JSON.stringify(data))
        e.preventDefault()
        fetch('/server', {
            method: 'POST',
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             },
             body: JSON.stringify(data)
      
          })
        .then(res => {
            return res.json()
        })
        .then(res => {
            history.push('/')
        })
    }

    return (
        <div className='upload'>
           <Header />
            <div className='upload__center'>
            <form className='upload__form' onSubmit={handleSubmit}> 
                <label htmlFor='title'>Title</label>
                <input id="title" value={title} onChange={e=>setTitle(e.target.value)}></input>
                <label htmlFor='name'>Author</label>
                <input id="name" value={name} onChange={e=>setName(e.target.value)}></input>
                <label htmlFor='description'>Description</label>
                <textarea id="description" rows={10} cols={50} value={description} onChange={e=>setDescription(e.target.value)}></textarea>
                <div>
                 <button>Submit</button>
                </div>

            </form>
            </div>

        </div>
    )
}

export default Upload
