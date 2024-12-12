import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Heading } from '@chakra-ui/react'
import { useSupeAuthStateChange } from './hooks/useSupeBaseAuthChange'
import { signOutSupabase } from '../supabaseAPI'

const Header = () => {  

  const {session} = useSupeAuthStateChange()


  const navigate = useNavigate()
  
  const logoutHandler = async () => {
    
      signOutSupabase()
    
  }

  return (
    <div className='flex justify-between p-8  items-center    z-10'>
      <Heading className='text-2xl font-main-heading cursor-pointer tracking-widest' onClick={() => navigate("/")} >
      <span className='font-main-heading'>KC</span><span className='text-app-secondary-color font-main-heading'>Enterprises</span>
      </Heading>
      {
      session && 
        <nav id='navbar' className=''>
      <ul className='flex justify-center align-middle gap-20 '>
        <li className='hover:font-semibold hidden md:block'>
          <NavLink to={'home'}   >Home</NavLink>

        </li>
        <li className='hover:font-semibold hidden md:block'>
          <NavLink to={'category'}  >Category</NavLink>

        </li>
        <li className='hover:font-semibold hidden md:block'>
          <NavLink to={'about-us'} > About Us</NavLink>
        </li>
        <li className='hover:font-semibold'>
          <Link onClick={logoutHandler} >{session ? 'Logout' : 'Login'}</Link>
         
        </li>
      </ul>
        </nav>}
    </div>
  )
}

export default Header