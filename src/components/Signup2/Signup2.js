import {Link} from "react-router-dom";
import FirstSidebar from "../FirstSidebar/FirstSidebar";
import {Box, Button, Input, Flex, Heading,Text,UnorderedList,ListItem, form} from "@chakra-ui/react"
import sub from "./Signup2.module.scss"
const Signup2 = () => {
    return ( 
        <Flex>
            <FirstSidebar/>
            <Box h='100vh' w='60%' bg='#042A37' justifyContent='center' color='white' textAlign='center' pt='3rem'>
                    <Heading mb='2rem'>What Are You Registering As?</Heading>
                    <Button bg='#042A37'border='1px solid blue' w='30rem' _hover={{background: "transparent"}}>
                        <Flex bg='transparent'>
                            <Link to='/Organization'><Button _hover={{background:"blue" , color:'white'}} mx='2rem' bg='transparent'  hover='text-black' >Organization</Button></Link>
                            <Link to='/User'><Button _hover={{background:"blue", color:"white"}} mx='2rem' bg='transparent'>User</Button></Link>
                        </Flex>
                    </Button>
                    <UnorderedList mt='3rem' fontSize='2xl'>
                        <ListItem mb='1rem'>Registering as an organisation allows you to <br />create an account for an organization or an <br /> institution such as a school, it also allows you <br />to manage multiple examiner accounts such <br /> as teacher and it includes the features of an <br />examiner</ListItem>
    
                        <ListItem>Registering as a user allows you to take quizes <br /> and take tests for practice</ListItem>
                    </UnorderedList>
                    <Link to="/Signup"><Button _hover={{background:"blue"}} bg='blue' mt='1rem' width='8rem' >Back</Button></Link>
                </Box>
         {/* <div className={sub.many}>
            <div className={sub.sidebar}>
                <div className={sub.top}>
                    <img src="images/logo.png" alt="" />
                </div>
                <div className={sub.write}>
                    <ul>
                        <li className={sub.profile}><p>Profile Details</p></li>
                        <li  className={sub.organ}><p>Organisational/Institutional<br></br> Details</p></li>
                        <li><p>Confirm</p></li>

                    </ul>
                </div>
                        
            </div>  */}
            {/* <div className={sub.mainsub}>
                <h1>What are you registering as?</h1>
                <div>
                    <button className={sub.choose}>
                        <button className={sub.sinor}>Organisation</button>
                        <button className={sub.exam}>Examiner</button>
                        <button className={sub.sinser}>User</button>
                    </button>
                </div>
                <div className={sub.note}>
                    
                        <li>Registering as an organisation allows you to <br />create an account for an organization or an <br /> institution such as a school, it also allows you <br />to manage multiple examiner accounts such <br /> as teacher and it includes the features of an <br />examiner</li>
                        <li>Registering as an examiner allows you to quiz <br /> users and create quizes</li>
                        <li>Registering as a user allows you to take quizes <br /> and take tests for practice</li>
                    
                </div>
                <div className={sub.mixin}>
                    <Link to="/Signup"><button className={sub.Back}>Back</button></Link> */}
                    {/* <button className={sub.Confirm}>Confirm</button> */}
                
           
        {/* <div className={sub.many1}>
            <div><label>Matriculation number</label></div>
            <div><input type="text" placeholder='Matriculation number' /></div>
            <div><label>Registration number</label></div>
            <div><input type="text" placeholder='Registration number' /></div>
            <div><label>Department</label></div>
            <div><input type="text" placeholder='Department' /></div>
            <div><label>Program</label></div>
            <div><input type="text" placeholder='Program' /></div>
            <div className={sub.bett}>
                <div className={sub.bett1}>
                    <Link to="/Signup"><button >Back</button></Link>
                </div>
                <div className={sub.bett2}>
                    <Link to="/Signup3"><button >Next</button></Link>
                </div>
            </div> 
        </div> */}
       
       </Flex>
     );
}
 
export default Signup2;