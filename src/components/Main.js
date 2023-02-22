import React from 'react'
import Header from './Header'
import Posts from './Posts'
import './Main.css'

const Main = () => {
  return (
    <div className='main'>
        <Header />
        <Posts />
    </div>
  )
}

export default Main