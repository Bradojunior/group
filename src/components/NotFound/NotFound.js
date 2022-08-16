import { Flex, Box, Heading,  Stack, Text, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const NotFound = () =>{
    return(
        <Stack alignItems='center'  justifyContent='center' mt='10rem'  >
            <Heading mb='2rem'>Sorry</Heading>
            <Text>This page cannot be accessed</Text>
            <Link to='/'><Button mt='1rem' colorScheme="blue">Back..</Button></Link>
        </Stack>
    )
}

export default NotFound;