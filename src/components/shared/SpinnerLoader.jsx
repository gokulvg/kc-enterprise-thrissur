import React from 'react'
import { Box, Center, Spinner } from "@chakra-ui/react"

const SpinnerLoader = () => {
    return (
        <Box pos="absolute" inset="0" bg="#e2e8f0" zIndex={50} opacity={0.5}>
            <Center h="full">
                <Spinner color="teal.500" />
            </Center>
        </Box>
    )
}

export default SpinnerLoader