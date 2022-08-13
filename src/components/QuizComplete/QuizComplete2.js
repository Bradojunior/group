
import {Box, Button,Text,  Stack, Heading} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const QuizComplete = () => {
    const message = localStorage.getItem('message');
    const style={color:'blue'}
    return ( 
        <>
        
        <Stack ml='11rem' boxShadow='2xl' rounded='xl' w='155vh' mt='3rem' h='85vh'>
            <Box textAlign='center' mt='5rem'>
                <Heading fontSize='4rem'>Test Completed</Heading>
                <Heading fontSize='1.2rem' my='3rem'>You Have Successfully Completed the Test</Heading>
                <Heading>{message}</Heading>
                
                <Link to="/"><Button h='4rem' mt='6rem' w='10rem'  color='white' bg='#444ADD' _hover={{background:"#444ADD", color:"white"}}>Done</Button></Link>
            </Box>
        </Stack>
       
        </>
     );
}
 
export default QuizComplete;