import React from 'react'
import Header from '../components/Header'
import Post from '../components/Post'
import Sideprofile from '../components/Sideprofile'
import { useBookContext } from '../context'
import './Home.css'


function Home() {
    // console.log("token"+localStorage.getItem('token'));
    const { data } = useBookContext()
    return (
        <div className='home'>
            <Header />
            <div className='home__center'>
                <div className='home__left'>
                    {
                         data.map(article => {

                            let id=article._id
                            console.log(id)
                            let title = article.title
                            let name = article.name
                            let description = article.description

                            return <Post key={id} title={title} name={name} description={description}/>
                         })
                    }
                </div>
                <div className='home__right'>
                    <Sideprofile />
                </div>
            </div>

        </div>
    )
}

export default Home
