import React, { useState } from 'react'
import landingImage from "../assets/chair.jpeg"
import Button from './shared/Button'
import { useRef } from 'react'
import { signinWithFirebase } from '../constants/firebase'
import { useUserRole } from './hooks/useFirebaseAuthStateChange'
import { supabase } from '../supabase'
import { signInSupabase } from '../supabaseAPI'
// import { useSupeAuthStateChange } from './hooks/useSupeBaseAuthChange'

const Login = () => {
  const [credErrorState,setCredErrorState] = useState({
    username:false,
    password:false
  })

  const usernameRef = useRef();
  const passwordRef = useRef()



  const onCredStateChange = ( ) =>{
    setCredErrorState({username:false,password:false})
  }

  const loginHandler = async (e) => {
    e.preventDefault();

      if (usernameRef.current?.value?.length === 0) {
        setCredErrorState((prevData) => ({
          ...prevData,
          username: true
        }));
        return 
      }
      if(passwordRef.current?.value?.length === 0){
        setCredErrorState((prevData)=>({
          ...prevData,password:true
        }))
        return
      }
    
const {data,error} = signInSupabase(usernameRef.current.value,passwordRef.current.value)
// console.log(data)
// console.log(error)

  }
  return (

    <div className='grow flex justify-center items-center '>
      <div className='md:py-16 '>
      <section className='pb-8'>
      
      <h2 className='font-main-heading-heading font-extrabold text-2xl mb-2 block'>Login</h2>
      <h4 className='font-sub-heading font-light'>Welcome, please login to continue</h4>
      </section>
      <form className='w-3/4'>
        <div className='pt-5 pb-1 w-max'>
          <label className='font-sub-heading font-semibold pb-4' >User Name</label>         
          <input type='text' name="username" onChange={onCredStateChange} placeholder='Enter your username' className='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' ref={usernameRef} />
        </div>
          {credErrorState.username && <span className='text-app-error-color pb-5'>***Please enter valid user name</span>}
        <div className='pt-5 pb-1 w-max'>
          <label className='font-sub-heading font-semibold pb-4'>Password</label>
          <input type='password' onChange={onCredStateChange} placeholder='Enter your password' name='password' className='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' ref={passwordRef} />
        </div>
        {credErrorState.password && <span className='text-app-error-color pb-5'>***Please enter valid password</span>}
        <div className='py-3 m-auto w-full'>
          <Button style={{ padding: '0.3rem 0.9rem', }} onClick={loginHandler}>Login</Button>
       
        </div>
      </form>
      </div>
    </div>
  )
}

export default Login