import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Heading } from '@chakra-ui/react'
import { useSupeAuthStateChange } from './hooks/useSupeBaseAuthChange'
import { signOutSupabase } from '../supabaseAPI'
import { IoHome } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaPowerOff } from "react-icons/fa";

const Header = () => {  

  const {session} = useSupeAuthStateChange()


  const navigate = useNavigate()
  
  const logoutHandler = async () => {
    
      signOutSupabase()
    
  }

  return (
    <div className='flex justify-between p-8  items-center    z-10'>
      <Heading className='text-2xl font-main-heading cursor-pointer tracking-widest' onClick={() => navigate("/")} >
      <span className='font-main-heading'>KC </span><span className='text-app-secondary-color font-main-heading'>Enterprises</span>
      </Heading>
      {
      session && 
        <nav id='navbar' className=''>
      <ul className='flex justify-center align-middle gap-20 '>
        <li className='hover:font-semibold hidden md:block relative '>
          <NavLink to={'/'}   ><IoHome className='inline absolute top-1 left-[-18px]'/> HOME</NavLink>

        </li>
        <li className='hover:font-semibold hidden md:block relative'>
          <NavLink to={'category'}  ><MdOutlineCategory size={20} className='inline absolute top-[2px] left-[-21px]'/> CATEGORY</NavLink>

        </li>
        <li className='hover:font-semibold hidden md:block relative'>
          <NavLink to={'about-us'} > <FaPeopleRoof size={18} className='inline absolute top-[4px] left-[-21px]' />ABOUT US</NavLink>
        </li>
        <li className='hover:font-semibold relative'>
          <Link onClick={logoutHandler} ><FaPowerOff size={16} className='inline absolute top-[5px] left-[-21px]'/>{session ? 'LOGOUT' : 'LOGIN'}</Link>
         
        </li>
      </ul>
        </nav>}
    </div>
  )
}

export default Header