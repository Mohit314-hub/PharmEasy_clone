import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const StatisticsHome = () => {
  return (
    <Box
    //  border="2px solid red"
     height="18rem"
     marginY={"60px"}
     color="#4f585e"
     textAlign="left"
     
    >
        <Flex height="18rem" >
            <Box w="25%">
                <Image src="https://assets.pharmeasy.in/web-assets/dist/4d2f7c48.svg"/>
                <Heading letterSpacing=".8px" py={"25px"} fontSize="45px" fontWeight="700">45 Million</Heading>
                <Text wordSpacing=".5px" fontSize="18px" fontWeight="600" >Registered Users as of Jan 23, 2024</Text>
            </Box>
            <Box w="25%">
                <Image src="https://assets.pharmeasy.in/web-assets/dist/92c372bb.svg"/>
                <Heading letterSpacing=".8px" py={"25px"} fontSize="45px" fontWeight="700">6.8 Million</Heading>
                <Text wordSpacing=".5px" fontSize="18px" fontWeight="600" >PharmEasy Orders as of JN24</Text>
            </Box>
          
            <Box w="25%">
                <Image src="https://assets.pharmeasy.in/web-assets/dist/f2d557d3.svg"/>
                <Heading letterSpacing=".8px" py={"25px"} fontSize="45px" fontWeight="700">28K+</Heading>
                <Text wordSpacing=".5px" fontSize="18px" fontWeight="600" >Pin-Codes Serviced for the month of DEC 2024</Text>
            </Box>
        </Flex>
    </Box>
  )
}

export default StatisticsHome