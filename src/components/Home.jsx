import React, { useEffect, useState } from 'react'


import landingImage from "../assets/chair.jpeg"
import Login from './Login'
// import { app, auth, db } from '../constants/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Button from './shared/Button'
import { supabase } from '../supabase'
import { signOutSupabase } from '../supabaseAPI'
// import useFirebaseAuthStateChange from './hooks/useFirebaseAuthStateChange'



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
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-start '>
      <img className='grow' src={landingImage} alt='landingImage' />
      {session ? <WelcomeNote /> : <Login />}
    

    </div>
  )
}

const WelcomeNote = () => {

  return <div className='grow  flex items-center justify-center'>
    <div className='m-auto flex gap-8 flex-col'>
      <h2 className='font-sub-heading font-bold text-2xl'>Great value, great service, right at your fingertips.</h2>
      <h2 className='font-sub-heading font-semibold text-xl'>Your one-stop shop for quality household items, delivered right to your doorstep.</h2>
      <h2 className='font-sub-heading font-semibold text-lg'>Modern Funrinture Brands upto 50% disocunt</h2>
      <Button >Click here to view the collections</Button>    
    </div>
  </div>
}

export default Home