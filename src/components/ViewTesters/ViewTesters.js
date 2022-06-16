import OrgSidebar from '../OrgSidebar/OrgSidebar'
import OrgNav from '../OrgNav/OrgNav'
import {Link} from "react-router-dom"
import { Flex,Box,Heading, Image,  Text,  Stack } from '@chakra-ui/react'
import {CgProfile} from "react-icons/cg"
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Textarea
  } from '@chakra-ui/react'

const ViewTesters = () =>{
    return(
        <>
         <OrgSidebar/>
            <OrgNav/>
            <Stack  ml='16.5rem' bg='whitesmoke' h='91vh'  w='80.5%'>
                <Heading fontSize='1.5rem' >Added Testers</Heading>
                <Box  bg='white' w='100%' h='35rem' boxShadow='xl'  mt='2rem' justifyContent='center'>
                    <Heading ml='29rem' fontSize='2rem' pt='2rem'>View Testers</Heading>
                    <Input id='search' h='3rem' mt='2rem' w='40rem' ml='15rem' type='text' placeholder='Search for Emails'/>
                    <Box  h='6rem' w='40rem' ml='15rem' mt='4rem' boxShadow='xl'>
                        <Flex columnGap='5rem' ml='5rem'>
                            <CgProfile size={50}/>
                            <Box>
                                <Heading>Halilu  Halilu</Heading>
                                <Text>Halilu@gmail.com</Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box  h='6rem' w='40rem' ml='15rem' mt='4rem' boxShadow='xl'>
                        <Flex columnGap='5rem' ml='5rem'>
                            <CgProfile size={50}/>
                            <Box>
                                <Heading>James Thomson</Heading>
                                <Text>Thomson@gmail.com</Text>
                            </Box>
                        </Flex>
                    </Box>
                   
                   
                </Box>
            </Stack>
        </>
    )
}
export default ViewTesters