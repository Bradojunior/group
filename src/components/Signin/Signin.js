import React from "react";
import {Link} from "react-router-dom";
import sin from "./Signin.module.scss"
import { useMediaQuery } from '@chakra-ui/media-query';
import { Flex,Box,Heading, ButtonGroup, Button, Spacer ,Text, FormControl, form,  FormLabel,Input , Stack ,Checkbox} from '@chakra-ui/react'

const Home= () => {
   const [isNotSmallerScreen] = useMediaQuery("(min-width:680px)");
    return ( 
    <Flex direction={isNotSmallerScreen ? "row" : "column"} width='100%' h='100vh'>
   <Box width='50%' backgroundSize='cover'  bg='#042A37' overflowY='hidden' overflow='hidden' overflowX='hidden'  >
      <Flex  alignItems='center' gap='2' >
      <Box p='2'>
        <img src="images/logo.png" alt="" />
      </Box>
      <Spacer />
      <ButtonGroup gap='2'>
         <Heading as='h6' color='white' fontSize={{ base: '20px', md: '40px', lg: '25px' }} >Have an account?</Heading>
        <Link to="/Signup"><Button colorScheme='teal'>Sign Up</Button></Link>
      </ButtonGroup>
    </Flex>
    <Flex  width='full' align='center' height='100vh' overflowY='hidden' overflow='hidden' overflowX='hidden' bg='#042A37' flexDirection='column' justifyContent='center'>
    <Box bg='#042A37' color='white' textAlign='center'>
         <Heading as='h1'  fontSize='xxx-large' fontSize={{ base: '24px', md: '40px', lg: '45px' }}>Welcome</Heading>
         <Text fontSize='3xl' fontSize={{ base: '24px', md: '40px', lg: '35px' }}>Login in to your account</Text>
    </Box>
      <form color='white'>
         <FormControl color='white'   p='3' w={[400, 600, 500]}>
            <FormLabel fontSize={{ base: '24px', md: '40px', lg: '25px' }}>Email Address</FormLabel>
            <Input type='email' placeholder='Enter your email address'/>
         </FormControl >
         <FormControl color='white'  p='3' w={[400, 600, 500]}>
            <FormLabel fontSize={{ base: '24px', md: '40px', lg: '25px' }}>Password</FormLabel>
            <Input type='Password' placeholder='Enter your Password'/>
         </FormControl>
         <Stack isInline justifyContent='space-between' color='white'>
            <Box m='2'>
               <Checkbox fontSize={{ base: '24px', md: '40px', lg: '35px' }}>Remember Me</Checkbox>
            </Box>
            <Box>
               <Text  colorScheme='teal' fontSize={{ base: '15px', md: '30px', lg: '15px' }}>Forgot your password?</Text>
            </Box>
         </Stack>
         <Button width='full' colorScheme='teal' mt='3rem' w={[400,  600, 500]}>Login</Button>
      </form>
   </Flex>
</Box>
<Box bg='rgb(10, 10, 49)' height='100vh' width='50%' color='white' justifyContent='center' alignContent='center' alignItems='center' >
      <img 
      src="images/people.png" 
      height='350rem' 
      width='550rem'
      alt="" />
      <Heading m='3'>Quizzy</Heading>
      <Heading m='3'>Landing Page Ui Design</Heading>
      <Text m='3' as='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Tempore suscipit doloribus magnam aliquid expedita numquam officia <br /> impedit sint asperiores ad, facilis recusandae, quisquam similique <br /> perferendis ratione sed architecto. Excepturi, tempora.</Text>
</Box>
</Flex> 
   
     
        
     );
}
 
export default Home;
