import React, { useEffect, useState } from 'react'


import landingImage from "../assets/chair.jpeg"
import Login from './Login'
import { onAuthStateChanged } from 'firebase/auth'
import Button from './shared/Button'
import { supabase } from '../supabase'
import { signOutSupabase } from '../supabaseAPI'
import { FaArrowAltCircleDown } from "react-icons/fa";



const Home = () => {

  const [session,setSession] = useState(null);

  useEffect(()=>{
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  },[])



 
  return (
    // <div className='grid grid-cols-2 gap-6 '>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 h-full '>
      <img className='grow' src={landingImage} alt='landingImage' />
      {session ? <WelcomeNote /> : <Login />}
    

    </div>
  )
}

const WelcomeNote = () => {
  const viewCollectionHandler = ( ) =>{
    const targetDiv  = document.getElementById("collection")
    targetDiv.scrollIntoView({ behavior: 'smooth' });
    console.log("first")
  }
  return <div className='grow  flex items-center justify-center'>
    <div className='m-auto flex gap-8 flex-col'>
      <h2 className='font-sub-heading font-bold text-2xl'>Great value, great service, right at your fingertips.</h2>
      <h2 className='font-sub-heading font-semibold text-xl'>Your one-stop shop for quality household items, delivered right to your doorstep.</h2>
      <h2 className='font-sub-heading font-semibold text-lg'>Modern Funrinture household items Brands upto wholesale disocunt</h2>
      <Button onClick={viewCollectionHandler} > <FaArrowAltCircleDown size={25}/> click here to view the collections </Button>    
    </div>
  </div>
}

export default Home