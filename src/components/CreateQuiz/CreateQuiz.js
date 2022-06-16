import OrgSidebar from '../OrgSidebar/OrgSidebar'
import OrgNav from '../OrgNav/OrgNav'
import {Link} from "react-router-dom"
import { Flex,Box,Heading, Image,  Text,  Stack } from '@chakra-ui/react'
import { ChevronRightIcon} from '@chakra-ui/icons'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
  import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'
  import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Textarea
  } from '@chakra-ui/react'
const CreateQuiz = () =>{
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
                        <BreadcrumbLink fontSize='1.5rem' href='#'>Publish</BreadcrumbLink>
                    </BreadcrumbItem>
                    </Breadcrumb>
                    <Box ml='20rem' bg='white' w='100%' h='30rem' boxShadow='xl' pt='2rem' mt='2rem'> 
                        <Heading fontSize='2rem' ml='20rem'>Add Basic Information</Heading>
                        <Text ml='15rem'>Give Your quiz a description and a name so it gives clearification to the students</Text>
                        <FormControl mt='1rem'>
                            <FormLabel htmlFor='email'>Quiz Name</FormLabel>
                            <Input id='email' type='text' placeholder='E.g Sample Quiz'/>
                        </FormControl>
                            <FormLabel mt='1rem' htmlFor='email'>Instructions</FormLabel>
                            <Textarea placeholder='Quiz Instructions' />
                            <Box>
                                <Heading fontSize='1.5rem' mt='1rem'>Duration</Heading>
                            <Flex mt='1rem'>
                                <NumberInput size='md' maxW={20} defaultValue={0} min={0}>
                                    <NumberInputField />
                                    <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                                
                                <NumberInput size='md' maxW={20} defaultValue={0} min={0}>
                                    <NumberInputField />
                                    <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                               
                                <NumberInput size='md' maxW={20} defaultValue={0} min={0}>
                                    <NumberInputField />
                                    <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </Flex>
                            </Box>
                            <Link to='/OrgQuestions'><Button ml='30rem' w='8rem' colorScheme='blue' mt='1rem'>Next</Button></Link>
                    </Box>
                    
            </Stack>
        </>
    )
}
export default CreateQuiz