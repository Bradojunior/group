import OrgSidebar from '../OrgSidebar/OrgSidebar'
import OrgNav from '../OrgNav/OrgNav'
import {Link} from "react-router-dom"
import {Box, Button,Text,  Stack, Heading,Input, Select, Textarea} from "@chakra-ui/react";

const OrgHelp = () => {
    return ( 
        <>
        <OrgSidebar/>
            <OrgNav/>
        <Stack ml='19rem' boxShadow='2xl' rounded='xl' w='155vh' mt='2rem'>
            <Box ml='10rem'>
            <Select placeholder='Category' w='35rem' h='4rem' mt='1rem'>
                    <option value='option1'>Quiz</option>
                    <option value='option2'>Account</option>
                    <option value='option3'>Feedback</option>
                </Select>
                <Input w='35rem' my='1rem' h='4rem' type='text' placeholder='Subject'/>
                <Input w='35rem' mb='1rem' h='4rem' type='text' placeholder='Email'/>
                <Textarea h='10rem' w='50rem' placeholder='Briefly describe the situation our support team will get back to you as soon as possible'/>
                <Link to="#"><Button h='4rem' my='2rem' ml='10rem' w='10rem' color='white' bg='#444ADD' _hover={{background:"#444ADD", color:"white"}}>Submit</Button></Link>
            </Box>
        </Stack>
       
        </>
     );
}
 
export default OrgHelp;