import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
// import { auth, signoutFirebase } from '../constants/firebase'
// import { onAuthStateChanged } from 'firebase/auth'
// import useFirebaseAuthStateChange from './hooks/useFirebaseAuthStateChange'
import { Heading } from '@chakra-ui/react'

const Header = () => {  
  
  // const [isLoggedIn, setIsLoggedIn,role] = useFirebaseAuthStateChange();

  const navigate = useNavigate()
  
  const logoutHandler = async () => {
    // if (isLoggedIn) {
      // await signoutFirebase();
    // }
  }
  // console.log(isLoggedIn)
  return (
    <div className='flex justify-between p-8  items-center    z-10'>
      <Heading className='text-2xl font-main-heading cursor-pointer tracking-widest' onClick={() => navigate("/")} >
      <span className='font-main-heading'>KC</span><span className='text-app-secondary-color font-main-heading'>Enterprises</span>
      </Heading>
      {
      // isLoggedIn && 
        <nav id='navbar'>
      <ul className='flex justify-center align-middle gap-20 '>
        <li className='hover:font-semibold'>
          <NavLink to={'home'}   >Home</NavLink>

        </li>
        <li className='hover:font-semibold'>
          <NavLink to={'category'}  >Category</NavLink>

        </li>
        <li className='hover:font-semibold'>
          <NavLink to={'about-us'} > About Us</NavLink>
        </li>
        <li className='hover:font-semibold'>
          {/* <Link onClick={logoutHandler} >{isLoggedIn ? 'Logout' : 'Login'}</Link> */}
          <Link onClick={logoutHandler} >{ 'Login'}</Link>
        </li>
      </ul>
        </nav>}
    </div>
  )
}

export default Header