import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import shopImage from "../assets/shoplocation.jpg"

const AboutUs = () => {
  return (
    <Box className='flex  items-center flex-col gap-6 mt-10 bg-slate-50 pb-5'>
      <Heading size='lg' >About Us</Heading>
      <Box className='grid grid-cols-2 gap-6 items-center' >
        {/* <Box> */}
          <Image src={shopImage}  />
        {/* </Box> */}
        <Box>
        <Heading size='md'>Products and Services offered:</Heading>
        <br/>
        <Heading size='sm'>K.C Enterprises in Thamburan Lane, Thamburan Lane& P.O Road has a wide range of products and / or services to cater to the varied requirements of their customers. The staff at this establishment are courteous and prompt at providing any assistance. This establishment is functional from 9:30 - 19:00. </Heading>
        <Heading size='md' className='mt-6'>Location and Overview:</Heading>
        <br/>
        <Heading size='sm'>
        K.C Enterprises in Thamburan Lane, Thamburan Lane& P.O Road, K.C Enterprises is a top player in the category Carpet Dealers in the Thrissur.
         This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Thrissur.
         Over the course of its journey, this business has established a firm foothold in it’s industry. 
         The belief that customer satisfaction is as important as their products and services, 
         have helped this establishment garner a vast base of customers, which continues to grow by the day.           
         In the near future, this business aims to expand its line of products and services and cater to a larger client base. 
         In Thrissur, this establishment occupies a prominent location in Thamburan Lane, Thamburan Lane& P.O Road. 
         It is an effortless task in commuting to this establishment as there are various modes of transport readily available.
         It is known to provide top service in the following categories: Carpet Dealers, Dhurrie Dealers. 
        </Heading>
          
        </Box>
      </Box>
      <Box>
        <Box>
        <Heading size='md'>K.C Enterprises in Thamburan Lane, Thamburan Lane& P.O Road, Thrissur</Heading>
          <Heading size='sm'>K.C Enterprises in Thrissur is one of the leading businesses in the Carpet Dealers. Also known for Carpet Dealers, Dhurrie Dealers and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of K.C Enterprises, Thrissur.</Heading>
        </Box>
       <Image src='' /> 

      </Box>
    
    
    </Box>
  )
}

export default AboutUs