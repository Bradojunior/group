import {Link} from "react-router-dom";
import ReactDOM from "react-dom";
import sup from "./Signup.module.scss"
import { FaBeer, AiFillInfoCircle, AiOutlineArrowLeft, } from 'react-icons/ai';
import FirstSidebar from '../FirstSidebar/FirstSidebar';
import {Box, Text, Heading, Button, Flex, } from "@chakra-ui/react"
const style = { color: "white", fontSize: "1.5em", marginLeft: "20rem", marginTop: "-1.5rem", 
}
const Sidebar = () => {
    return ( 
       <Flex>
       <FirstSidebar/>
       
                <Box h='100vh' w='60%' bg='#042A37' justifyContent='center' color='white' textAlign='center' pt='3rem'>
                    <Heading mb='2rem'>What Are You Registering As?</Heading>
                    <Button bg='#042A37'border='1px solid blue' w='30rem' _hover={{background: "transparent"}}>
                        <Flex bg='transparent' >
                            <Link to='/OrgLogin'><Button _hover={{background:"blue" , color:'white'}} mx='2rem' bg='transparent'  hover='text-black' >Organization</Button></Link>
                            <Link to='/Signin'><Button _hover={{background:"blue", color:"white"}} mx='5rem' bg='transparent'>User</Button></Link>
                        </Flex>
                    </Button>
                    <Text ml='18rem' >Choose one<Link to='/Signup2' color='blue' ><AiFillInfoCircle style={style}/></Link></Text>
                    <Link to="/Signin"><Button _hover={{background:"blue",color:"white"}} bg='blue' mt='20rem' width='8rem' >Back</Button></Link>
                </Box>
        </Flex>
     );
}
 
export default Sidebar;