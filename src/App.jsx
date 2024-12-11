import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (<div className='  bg-slate-50  h-screen'>
    <ToastContainer />
    <Header />
    <div className='px-5 pb-7'>
      <Outlet />
    </div>
  </div>)


}

export default App
