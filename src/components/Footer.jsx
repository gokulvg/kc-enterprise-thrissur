import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <Box className='bg-app-text-color grid grid-rows-2 items-center py-3  gap-3'>
      <Box className='grid grid-cols-1 md:grid-cols-2 justify-between'>

      <Box className='m-auto'>
        <Heading ><span className='font-main-heading'>KC </span><span className='text-white font-main-heading'>Enterprises</span></Heading>
      </Box>
      <Box className='flex gap-3'>
        <Box className='flex flex-col gap-2 justify-start '>
          <div className='text-sm/[15px] flex-col'>Contact Us</div>
          <div className='text-sm/[14px]'>
          <span>Email :</span><span>kcenterprisestcr@gmail.com</span>
          </div>
          <div className='text-sm/[14px]'>
          <span>Phone :</span><span> <IoLogoWhatsapp size={15} className='inline' /> 9846232422</span>

          </div>
          <div className='text-sm/[14px]'>
          <span>Phone :</span><span> <IoLogoWhatsapp size={15} className='inline'/> 7012063553</span>

          </div>
          <div className='text-sm/[14px]'>

          <span >Corporate Purchasing :</span><span>kcenterprisestcr@gmail.com</span>
          </div>
        </Box>
        <Box className='hidden '>
        <div className='text-sm/[15px]'>Ordering + Information</div>
        <div>
          <span className='text-sm/[14px]'>Shipping Informations</span>

        </div>
          <div>
            <span className='text-sm/[14px]'>Returns</span>
            </div>
            <div>
          <span className='text-sm/[14px]'>Exchanges</span>
              
              </div>  
        </Box>
      </Box>
      </Box>
      <Box className='flex flex-col justify-center items-center gap-2 mt-4'>
        <span className='text-sm/[13px]'>If you are using a screen reader and having problems using this website please call 8075481683 for assistance.</span>
        <div className='text-sm/[13px] m-auto'>

        <span className='m-auto' >© 2024 KC Enterprises  USEPRIVACY POLICYSITE INDEXAD CHOICESCO-BROWSE</span>
        </div>
      </Box>
    </Box>
  )
}

export default Footer