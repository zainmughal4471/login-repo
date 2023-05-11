import React from 'react'
import CustomNavbar from '../Navbar'
import { userData } from '../../helper'
// import CustomNavbar from './components/Navbar'

function Home() {
    const {username} = userData()
  return (
    <div>
      <CustomNavbar/>
      <div className='text-white text-2xl font-semibold'>
        Welcome {username}
      </div>
    </div>
  )
}

export default Home
