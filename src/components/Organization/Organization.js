import {Link} from "react-router-dom";
import nas from './Organization.module.scss'
import FirstSidebar from "../FirstSidebar/FirstSidebar";
import {Box, Button, Input, Flex, Heading, form} from "@chakra-ui/react"
const Organization = () => {
    return ( 
            <Flex>
                <FirstSidebar/>
        {/* <div className={nas.all}>
            <div className={nas.sidebar}>
            <div className={nas.top}>
            <img src="images/logo.png" alt="" />
            </div>
            <div className={nas.write}>
               <ul>
                    <li className={nas.profile}><p>Profile Details</p></li>
                    <li  className={nas.orga}><p>Organisational/Institutional<br></br> Details</p></li>
                    <li><p>Confirm</p></li>
               </ul>
            </div>
            </div> */}
            <Box  h='100vh' w='60%' bg='#042A37' justifyContent='center' textAlign='center' pt='3rem' color='white'>
                <Heading>What are you registering as?</Heading>
                <Button width='20rem' mt='2rem'>
                    <Button width='15rem' bg='blue' _hover={{background:"blue", color:"white"}}>Organization</Button>
                </Button>
                <form >
                    <Input my='1rem' width='35rem' type="text" Id="text" placeholder="orgname"/><br />
                    <Input my='1rem' width='35rem' type="text" id="text" placeholder="Email"/><br />
                    <Input my='1rem' width='35rem' type="text" id="text" placeholder="Address"/><br />
                    <Input my='1rem' width='35rem' type="text" id="text" placeholder="password"/><br />
                    <Input my='1rem' width='35rem' type="text" id="text" placeholder="Confirm Password"/>
                </form>
                <Flex justifyContent='center' columnGap='5rem' >
                    <Link to="/Signup"><Button width='8rem' bg='blue' _hover={{background:"blue", color:"white"}}>Back</Button></Link>
                    <Link to="/LandingPage"><Button width='8rem' bg='blue' _hover={{background:"blue", color:"white"}}>Next</Button></Link>
                </Flex>
            </Box>

             {/* <div className={nas.organ}>
                <h1>what are you registering as?</h1>
                <div className={nas.org}>
                <input type="text" id="text" placeholder="Organization"/>
                </div>
                <div className={nas.regis}>
                    <input type="text" id="text" placeholder="Name of Organization/Institution"/><br />
                    <input type="text" id="text" placeholder="Field of Organization/Institution"/><br />
                    <input type="text" id="text" placeholder="First Name"/><br />
                    <input type="text" id="text" placeholder="Surname"/><br />
                    <input type="text" id="text" placeholder="Middle Name"/>
                </div>
                <div className={nas.butt}>
                    <div className={nas.bac}>
                        <Link to="/Signup"><button>Back</button></Link>
                        </div>
                    <div className={nas.nes}>
                       <Link to="/Organization1"><button>Next</button></Link>
                    </div>
                </div>
            </div> */}
        </Flex>
     );
}
 
export default Organization;