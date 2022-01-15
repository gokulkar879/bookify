import React from 'react'
import './Post.css'


function Post({title, name, description}) {
    return (
        <div className='post'>
            <div className='post__header'>
                <img src="https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"></img>
                <p>{title}</p>
            </div>
            <div className='post__center'>
                <p className='post__author'>{name}</p>
                <p className='author__desc'>{description}</p>
            </div>
            <div className='post__footer'>
                <button>Like</button><p>-{0}</p>
            </div>
        </div>
    )
}

export default Post
