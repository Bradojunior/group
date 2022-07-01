import OrgSidebar from '../OrgSidebar/OrgSidebar'
import OrgNav from '../OrgNav/OrgNav'
import {Link} from "react-router-dom"
import { useFormik} from 'formik';
import { Flex,Box,Heading, Image,  Text,  Stack, VStack } from '@chakra-ui/react'
import axios from "axios"
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



    const token =  localStorage.getItem("token")
    const config = {
        "Content-Type": "application/json",
        Authorization : `Bearer ${token}`
    }
    const formik = useFormik({
        initialValues: {
        question:'',
          A: '',
          B:'',
          C:'',
          D:'',
          Answer:'',
        },
       

        onSubmit: async (values) => {
         try { 
               const arr = []
            arr.push(values.A)
            arr.push(values.A)
            arr.push(values.B)
            arr.push(values.A)
            const Quest = await axios.post("https://arcane-bayou-79576.herokuapp.com/api/quiz/:set_id/question",values,{headers: config})
            formik.resetForm();
        }catch(error){
            console.log(error.response.data)
        }
        //   alert(JSON.stringify(values, null, 2))
          
        },
      })
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
                    <Box  as="form" onSubmit={formik.handleSubmit} ml='20rem' bg='white' w='100%' h='30rem' boxShadow='xl'>
                        <Heading fontSize='2rem' ml='27rem'>Questions</Heading>
                        <Text ml='25rem'>Create Your Questions Here</Text>
                        
                                <FormControl mt='.5rem'>
                                    <FormLabel htmlFor='email'>Question</FormLabel>
                                    <Input id='email' 
                                    type='text' 
                                    name='question'
                                    placeholder='Type your question here'
                                    onChange={formik.handleChange}
                                    value={formik.values.question}
                                    />
                                </FormControl>
                                <Flex mt='.5rem'>
                                    <Heading >A</Heading>
                                    <Input id='text' 
                                    type='text' 
                                    name='A'
                                    onChange={formik.handleChange}
                                    value={formik.values.A}
                                    />
                                </Flex>
                                <Flex mt='.5rem'>
                                    <Heading >B</Heading>
                                    <Input id='text' 
                                    type='text' 
                                    name='B'
                                    onChange={formik.handleChange}
                                    value={formik.values.B}
                                    />
                                </Flex>
                                <Flex mt='.5rem'>
                                    <Heading >C</Heading>
                                    <Input id='text' 
                                    type='text' 
                                    name='C'
                                    onChange={formik.handleChange}
                                    value={formik.values.C}
                                    />
                                </Flex>
                                <Flex mt='.5rem'>
                                    <Heading >D</Heading>
                                    <Input id='text' 
                                    type='text' 
                                    name='D'
                                    onChange={formik.handleChange}
                                    value={formik.values.D}
                                    />
                                </Flex>
                                <Flex mt='.5rem'>
                                    <Heading fontSize="1rem" mt='.5rem'>Answer</Heading>
                                    <Input id='text' 
                                    type='text' 
                                    name='Answer'
                                    onChange={formik.handleChange}
                                    value={formik.values.Answer}
                                    />
                                </Flex>
                                <Button color='blue' pl='auto' type="submit">Add More Questions+</Button>
                        </Box>
                                <Flex columnGap='7rem' justifyContent='center'>
                                    <Link to='/CreateQuiz'><Button w='6rem'  colorScheme='blue' >Back</Button></Link>
                                    <Link to='/Publish'><Button w='6rem' colorScheme='blue' >Next</Button></Link>
                                </Flex>
                       
                   
            </Stack>
        </>
    )

}
export default OrgQuestions