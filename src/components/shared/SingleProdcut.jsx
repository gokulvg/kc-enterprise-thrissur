import { Box, Button, Grid, GridItem, Heading, Image, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ModelAddItem from './ModelAddItem'
import { useGetProductData } from '../hooks/useGetData'
import { useSupeAuthStateChange } from '../hooks/useSupeBaseAuthChange'

const SingleProdcut = () => {
    const {state} = useLocation()
    const {categoryId,productId} = useParams()
    const productData = useGetProductData(productId)
    const {id,name,price,size,imageUrl,catId}=state
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [zoomedImage, setZoomedImage] = useState(null);
    const {session} = useSupeAuthStateChange()

    const openZoomedImage = (imageUrl) => {
      setZoomedImage(imageUrl);
    };

    const closeZoomedImage = () => {
      setZoomedImage(null);
    };
console.log(size) 
    
  return (
    <Box>
        <Grid  className='grid grid-cols-1 md:grid-cols-2 pb-6' gap="6">
            <GridItem onClick={() => openZoomedImage(imageUrl)}>
            <Image src={imageUrl} rounded="md"  className='cursor-pointer' />
            </GridItem>
            <GridItem className='gap-5' >
                <Heading size='lg'> Name: {name}</Heading>
                <br/>
                <Heading size='lg'>Price: <del>&#2352;</del> {price}</Heading>
                <br/>
                {size && <Heading size='lg'>Size: {size}</Heading>}
                <br/>
                <br/>
                <br/>
                {(session?.user?.email ===('kcenterprisestcr@gmail.com') ||
                session?.user?.email ===('gokulvg47@gmail.com')) && <Button onClick={onOpen}>Edit</Button>}
            </GridItem>
        </Grid>
        {isOpen && <ModelAddItem isOpen={isOpen} onOpen={onOpen} onClose={onClose}
         isEdit={true} name={name} price={price} imageUrl={imageUrl} id={id} categoryId={catId} />}
        {zoomedImage && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 cursor-pointer bg-stone-700" onClick={closeZoomedImage}>
            <Image src={zoomedImage} className='max-w-[90vw] max-h-[90vh] object-contain' layout="fill"  />
          </div>
      )}
    </Box>
  )
}

export default SingleProdcut