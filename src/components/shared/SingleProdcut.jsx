import { Box, Button, Grid, GridItem, Heading, Image, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ModelAddItem from './ModelAddItem'
import { useGetProductData } from '../hooks/useGetData'

const SingleProdcut = () => {
    const {state} = useLocation()
    const {categoryId,productId} = useParams()
    const productData = useGetProductData(productId)
    console.log(productData)
    const {id,name,price,imageUrl,catId}=state
    const { isOpen, onOpen, onClose } = useDisclosure()
    
  return (
    <Box>
        <Grid  className='grid grid-cols-1 md:grid-cols-2 pb-6' gap="6">
            <GridItem>
            <Image src={imageUrl} rounded="md"  />

            </GridItem>
            <GridItem className='gap-5' >
                <Heading size='lg'>Prodct Name: {name}</Heading>
                <br/>
                <Heading size='lg'>Price: {price}</Heading>
                <br/>
                <br/>
                <br/>
                <Button onClick={onOpen}>Edit</Button>
            </GridItem>
        </Grid>
        {isOpen && <ModelAddItem isOpen={isOpen} onOpen={onOpen} onClose={onClose}
         isEdit={true} name={name} price={price} imageUrl={imageUrl} id={id} categoryId={catId}/>}
    </Box>
  )
}

export default SingleProdcut