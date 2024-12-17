import React from 'react'
import Home from './Home'
import Category from './Category'
import AboutUs from './AboutUs'
import Footer from './Footer'

const Body = () => {
  return (
    <div className='bg-slate-50 pt-10' >
      <Home/>
      <div id='collection'>
      <Category></Category>
      </div>
      <AboutUs />
      <Footer></Footer>
    </div>
  )
}

export default Body