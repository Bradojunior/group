import {Link} from "react-router-dom";
import {Box, Button, Input, Flex, Heading, form} from "@chakra-ui/react"
import FirstSidebar from "../FirstSidebar/FirstSidebar";
const User = () => {
    return ( 
        <Flex>
        <FirstSidebar/>
            <Box  h='100vh' w='60%' bg='#042A37' justifyContent='center' textAlign='center' pt='1rem' color='white'>
                <Heading>What are you registering as?</Heading>
                <Button width='20rem' mt='1rem'>
                    <Button width='15rem' bg='blue' _hover={{background:"blue", color:"white"}}>User</Button>
                </Button>
                <form >
                    <Input my='1rem' width='35rem' type="text" Id="text" placeholder="firstname"/><br />
                    <Input my='1rem' width='35rem' type="text" id="text" placeholder="surname"/><br />
                    <Input my='1rem' width='35rem' type="text" id="text" placeholder="username"/><br />
                    <Input my='1rem' width='35rem' type="text" id="text" placeholder="Email"/><br />
                    <Input my='1rem' width='35rem' type="text" id="text" placeholder="password"/>
                    <Input my='1rem' width='35rem' type="text" id="text" placeholder="confirm password"/>
                </form>
                <Flex justifyContent='center' columnGap='5rem'>
                    <Link to="/Signup"><Button width='8rem' bg='blue' _hover={{background:"blue", color:"white"}}>Back</Button></Link>
                    <Link to="/LandingPage"><Button width='8rem' bg='blue' _hover={{background:"blue", color:"white"}}>Next</Button></Link>
                </Flex>
            </Box>
        </Flex>
     );
}
 
export default User;