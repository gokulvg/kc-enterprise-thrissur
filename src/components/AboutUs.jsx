import { Box, Heading, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import shopImage from "../assets/shoplocation.jpeg"

const AboutUs = () => {
  const [showMap,setShowMap] = useState(false)

  return (
    <Box className='flex  items-center flex-col gap-6 mt-10 bg-slate-50 pb-5'>
      <Heading size='lg' >About Us</Heading>
      <Box className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center' >
        <Box  >
          <Image src={shopImage} objectFit='contain' className='rounded-md' onMouseEnter={()=>setShowMap(true)}  />
     
          
          
        </Box>
        <Box className='flex justify-center flex-col h-full'>
          <div>

        <Heading size='md'>Products and Services offered:</Heading>
        <br/>
        <div className='text-xl'>K.C Enterprises in Thamburan Lane, Thamburan Lane& P.O Road has a wide range of products and / or services to cater to the varied requirements of their customers. The staff at this establishment are courteous and prompt at providing any assistance. This establishment is functional from 9:30 - 19:00. </div>
          </div>
          <div>

        <Heading size='md' className='mt-6'>Location and Overview:</Heading>
        <br/>
        <div className='text-xl'>
        K.C Enterprises in Thamburan Lane, Thamburan Lane& P.O Road, K.C Enterprises is a top player in the category Carpet Dealers in the Thrissur.
         
        
        </div>
          </div>
          
        </Box>
      </Box>
      <Box className='flex items-center'>
        <Box className='w-1/2 h-1/2'>
          <Heading size='md'>K.C Enterprises in Thamburan Lane, Thamburan Lane& P.O Road, Thrissur</Heading>
          <div className='text-xl'>K.C Enterprises in Thrissur is one of the leading businesses in the Carpet Dealers. Also known for Carpet Dealers, Dhurrie Dealers and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of K.C Enterprises, Thrissur.</div>
        </Box>
        <div className='w-1/2 h-1/2 rounded-md'>
          <iframe width="100%" className='rounded-md' height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Door%20No.%20X/1919,%20Thamburan%20Lane%20&amp;%20P.O%20Road,%20Veliyannur,%20Thrissur,%20Kerala%20680001+(KC%20Enterprises)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>

        </div>

      </Box>
    
    
    </Box>
  )
}

export default AboutUs