import {Link} from "react-router-dom";
import usee from './User.module.css'
import {Box, Button, Input, Flex, Heading, form} from "@chakra-ui/react"
import FirstSidebar from "../FirstSidebar/FirstSidebar";
const User = () => {
    return ( 
        <Flex>
        <FirstSidebar/>
        {/* <div className={usee.all}>
            <div className={usee.sidebar}>
            <div className={usee.top}>
            <img src="images/logo.png" alt="" />
            </div>
            <div className={usee.write}>
               <ul>
                    <li className={usee.profile}><p>Profile Details</p></li>
                    <li  className={usee.orga}><p>Organisational/Institutional<br></br> Details</p></li>
                    <li><p>Confirm</p></li>
               </ul>
            </div>
            </div> */}
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
            {/* <div className={usee.organ}>
                <h1>what are you registering as?</h1>
                <div className={usee.org}>
                <input type="text" id="text" placeholder="User"/>
                </div>
                <div className={usee.regis}>
                    <input type="text" id="text" placeholder="First Name"/><br />
                    <input type="text" id="text" placeholder="Surname"/><br />
                    <input type="text" id="text" placeholder="Middle Name"/><br />
                    <input type="text" id="text" placeholder="Name of Organization/Institution"/><br />
                    <input type="text" id="text" placeholder="Organization/Institution code"/>
                </div>
                <div className={usee.butt}>
                    <div className={usee.bac}>
                    <Link to="/Signup"><button>Back</button></Link>
                        </div>
                    <div className={usee.nes}>
                       <Link to="/User1"><button>Next</button></Link>
                    </div>
                </div>
            </div> */}
        
        </Flex>
     );
}
 
export default User;