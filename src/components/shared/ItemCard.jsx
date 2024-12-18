import { Box, GridItem, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { useSupeAuthStateChange } from '../hooks/useSupeBaseAuthChange'

const ItemCard = (props) => {
    const {session} = useSupeAuthStateChange()

    return (
        <GridItem bg="bg" borderRadius="md" shadow='md'  className='hover:bg-white hover:shadow-xlhover cursor-pointer py-5' onClick={() => props.onClickHandler(props)}>
            {props.imageUrl && <Image src={`${props.imageUrl}`} rounded="md" className='object-center object-center w-full rounded-lg  h-96 ' />}
            {props.name && <Heading size='md' textAlign='center' paddingTop='3'>{props.name}</Heading>}
            {props.price && <Heading size='sm' textAlign='center'><del>&#2352;</del> {props.price}</Heading>}
        </GridItem>
    )
}

export default ItemCard