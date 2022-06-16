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
  import { ChevronRightIcon} from '@chakra-ui/icons'
  import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
const Publish = () =>{
    return(
        <>
        <OrgSidebar/>
            <OrgNav/>
            <Stack  ml='16.5rem' bg='whitesmoke' h='91vh'  w='80.5%'>
                <Heading fontSize='1.5rem'>Create Quiz</Heading>
                    <Breadcrumb pl='20rem' mb='1rem' spacing='8px' separator={<ChevronRightIcon color='gray.500' size={40}/>}>
                    <BreadcrumbItem>
                        <BreadcrumbLink fontSize='1.5rem' href='/CreateQuiz'>Basic Information</BreadcrumbLink>
                    </BreadcrumbItem>
 
                    <BreadcrumbItem>
                        <BreadcrumbLink fontSize='1.5rem' href='/OrgQuestions'>Questions</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink fontSize='1.5rem' href='/Publish'>Publish</BreadcrumbLink>
                    </BreadcrumbItem>
                    </Breadcrumb>
                    <Box ml='20rem' bg='white' w='100%' h='30rem' boxShadow='xl'  mt='2rem'>
                    <Heading fontSize='2rem' ml='29rem' pt='2rem'>Summary</Heading>
                        <Text ml='29rem'>Get Ready To Publish</Text>
                        <FormControl mt='1rem'>
                            <FormLabel htmlFor='email'>Tittle</FormLabel>
                            <Input id='email' type='text' placeholder='Elementary Science Quiz-Know Your Body Parts'/>
                        </FormControl>
                        <FormControl mt='1rem'>
                            <FormLabel htmlFor='email'>Questions</FormLabel>
                            <Input id='email' type='text' placeholder='60 Questions'/>
                        </FormControl>
                        <FormControl mt='1rem'>
                            <FormLabel htmlFor='email'>Duration</FormLabel>
                            <Input id='email' type='text' placeholder='Quiz Last for 45min'/>
                        </FormControl>
                        <Flex columnGap='10rem' justifyContent='center' mt='4rem'>
                            <Link to='/OrgQuestions'><Button w='6rem'  colorScheme='blue' >Back</Button></Link>
                            <Link to='#'><Button w='6rem' colorScheme='blue' >Publish</Button></Link>
                        </Flex>
                    </Box>
                    
            </Stack>
        </>
    )
}
export default Publish