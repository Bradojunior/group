import OrgSidebar from '../OrgSidebar/OrgSidebar'
import OrgNav from '../OrgNav/OrgNav'
import {Link} from "react-router-dom"
import { Flex,Box,Heading, Image,  Text,  Stack } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Textarea
  } from '@chakra-ui/react'

const ConfirmAdd = () =>{
    return(
        <>
         <OrgSidebar/>
            <OrgNav/>
            <Stack  ml='16.5rem' bg='whitesmoke' h='91vh'  w='80.5%'>
                <Heading fontSize='1.5rem' >Add Testers</Heading>
                <Box  bg='white' w='100%' h='35rem' boxShadow='xl'  mt='2rem' justifyContent='center'>
                    <Heading ml='29rem' fontSize='2rem' pt='2rem'>Add Testers</Heading>
                    <Input id='email' h='3rem' mt='2rem' w='40rem' ml='15rem' type='text' placeholder='Username'/>
                    <Input id='email'  h='3rem'  mt='2rem' w='40rem' ml='15rem' type='text' placeholder='Password'/>
                    <Input id='email'  h='3rem'  mt='2rem' w='40rem' ml='15rem' type='text' placeholder='Confirm Password'/>
                    <Flex columnGap='7rem' justifyContent='center' mt='2rem'>
                    <Link to='/AddTesters'><Button  h='3rem'  w='10rem'  mt='4rem' colorScheme='blue' >Back</Button></Link>
                        <Link to='/ViewTesters'><Button  h='3rem'  w='10rem'  mt='4rem' colorScheme='blue' >Add</Button></Link>
                    </Flex>
                </Box>
            </Stack>
        </>
    )
}
export default ConfirmAdd