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
const OrgQuestions = () =>{
    return(
        <>
         <OrgSidebar/>
            <OrgNav/>
            <Stack ml='16.5rem' bg='whitesmoke' h='91vh'  w='80.5%'>
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
                        <Heading fontSize='2rem' ml='27rem'>Questions</Heading>
                        <Text ml='25rem'>Create Your Questions Here</Text>
                        <FormControl mt='1rem'>
                            <FormLabel htmlFor='email'>Question 1</FormLabel>
                            <Input id='email' type='text' placeholder='Type your question here'/>
                        </FormControl>
                        <Flex mt='1rem'>
                            <Heading >::A</Heading>
                            <Input id='email' type='text' />
                        </Flex>
                        <Flex mt='1rem'>
                            <Heading >::B</Heading>
                            <Input id='email' type='text' />
                        </Flex>
                        <Flex mt='1rem'>
                            <Heading >::C</Heading>
                            <Input id='email' type='text' />
                        </Flex>
                        <Flex mt='1rem'>
                            <Heading >::D</Heading>
                            <Input id='email' type='text' />
                        </Flex>
                        <Button color='blue' pl='auto'>Add More Questions+</Button>
                        <Flex columnGap='7rem' justifyContent='center'>
                            <Link to='/CreateQuiz'><Button w='6rem'  colorScheme='blue' >Back</Button></Link>
                            <Link to='/Publish'><Button w='6rem' colorScheme='blue' >Next</Button></Link>
                        </Flex>
                    </Box>
            </Stack>
        </>
    )

}
export default OrgQuestions