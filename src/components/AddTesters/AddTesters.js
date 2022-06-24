import OrgSidebar from '../OrgSidebar/OrgSidebar'
import OrgNav from '../OrgNav/OrgNav'
import {Link} from "react-router-dom"
import * as yup from "yup"
import { Flex,Box,Heading, Image,  Text,  Stack, VStack} from '@chakra-ui/react'
import { useFormik} from 'formik';
import { useToast } from '@chakra-ui/react'
import axios from "axios"
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Textarea
  } from '@chakra-ui/react'

const AddTesters = () =>{
    const token =  localStorage.getItem("token")
    const config = {
        "Content-Type": "application/json",
        Authorization : `Bearer ${token}`
    }
    const toast = useToast()
    const onSubmit = async (values) =>{
        try{
            const Testers = await axios.post("https://arcane-bayou-79576.herokuapp.com/api/profile/org/testers",{...values},{headers: config})
            console.log(Testers)
            toast({
                title: 'Added',
                description: "Added To Testers",
                status: 'Success',
                duration: 9000,
                position: 'top',
                isClosable: true,
              })
        }catch(error){
            console.log(error.response.data)
        }
    };

    const formik = useFormik({
        initialValues:{
            fullName:"" ,
            department:"" , 
            email:"",
        },
        validationSchema : yup.object({
            fullName: yup.string().min(3, "please enter your Fullname").required("Fullname is required"),
            department: yup.string().min(3, "please enter your Department").required("Department is required"),
            email: yup.string().email( "Invalid Email").required("please enter your email address"),
        }),
        onSubmit,
    });
    return(
        <>
         <OrgSidebar/>
            <OrgNav/>
            <Stack  ml='16.5rem' bg='whitesmoke' h='91vh'  w='80.5%'>
                <Heading fontSize='1.5rem' >Add Testers</Heading>
                <Box  bg='white' w='100%' h='35rem' boxShadow='xl' pl="-5rem"  mt='2rem' justifyContent='center'>
                    <Heading ml='29rem' fontSize='2.5rem' pt='2rem'>Add Testers</Heading>
                    <VStack as="form" onSubmit={formik.handleSubmit} justifyContent='center'>
                            <div>
                                <Input id='email' h='3.5rem' mt='3rem' w='40rem' ml='3rem' 
                                type='text' 
                                name="fullName"
                                placeholder='fullName'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.fullName}
                                className={formik.errors.fullName && formik.touched.fullName ? "input-error" :""}
                                />
                                 {formik.touched.fullName && formik.errors.fullName ? <p className="reed">{formik.errors.fullName}</p> : null}
                            </div>
                            <div>
                                <Input id='email'  h='3.5rem'  mt='3rem' w='40rem' ml='3rem' 
                                type='text' 
                                name="department"
                                placeholder='department'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.department}
                                className={formik.errors.department && formik.touched.department ? "input-error" :""}
                                />
                                 {formik.touched.department && formik.errors.department ? <p className="reed">{formik.errors.department}</p> : null}
                            </div>
                            <div>
                                <Input id='email'  h='3.5rem'  mt='3rem' w='40rem' ml='3rem' 
                                type='text' 
                                name="email"
                                placeholder='email'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className={formik.errors.email && formik.touched.email ? "input-error" :""}
                                />
                                {formik.touched.email && formik.errors.email ? <p className="reed">{formik.errors.email}</p> : null}
                            </div>
                            <Flex pt="5rem" ml='29rem' columnGap="5rem">
                                <Button  h='3rem'  w='10rem'  
                                colorScheme='blue' 
                                type="submit"
                                disabled={!formik.isValid} 
                                >Add</Button>
                                <Link to="/viewTesters"><Button  h='3rem'  w='10rem'  colorScheme='blue' >View Testers</Button></Link>
                            </Flex>
                   </VStack>
                </Box>
            </Stack>
        </>
    )
}
export default AddTesters