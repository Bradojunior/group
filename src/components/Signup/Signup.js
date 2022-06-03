import {Link} from "react-router-dom";
import sup from "./Signup.module.scss"
import FirstSidebar from '../FirstSidebar/FirstSidebar';
import {Box, Text, Heading, Button, Flex} from "@chakra-ui/react"
const Sidebar = () => {
    return ( 
       <Flex>
       <FirstSidebar/>
        {/* <div className={sup.Mean}>
            <div className={sup.sidebar}>
                <div className={sup.top}>
                    <img src="images/logo.png" alt="" />
                 </div>
                 <div className={sup.write}>
                     <ul>
                         <li className={sup.profile}><p>Profile Details</p></li>
                         <li  className={sup.organ}><p>Organisational/Institutional<br></br> Details</p></li>
                         <li><p>Confirm</p></li>

                     </ul>
                 </div>
            </div> */}
                <Box h='100vh' w='60%' bg='#042A37' justifyContent='center' color='white' textAlign='center' pt='3rem'>
                    <Heading mb='2rem'>What Are You Registering As?</Heading>
                    <Button bg='#042A37'border='1px solid blue' w='30rem' _hover={{background: "transparent"}}>
                        <Flex bg='transparent' >
                            <Link to='/Organization'><Button _hover={{background:"blue" , color:'white'}} mx='2rem' bg='transparent'  hover='text-black' >Organization</Button></Link>
                            <Link to='/User'><Button _hover={{background:"blue", color:"white"}} mx='2rem' bg='transparent'>User</Button></Link>
                        </Flex>
                    </Button>
                    <Text ml='18rem'>Choose One <Link to='/Signup2' color='blue'>What's this?</Link></Text>
                    <Link to="/Signin"><Button _hover={{background:"blue",color:"white"}} bg='blue' mt='20rem' width='8rem' >Back</Button></Link>
                </Box>
            {/* <div className={sup.mainsub}>
                <h1>What are you registering as?</h1>
                <div>
                    <button className={sup.choose}>
                        <Link to="/Organization"><button className={sup.sinor}>Organisation</button></Link>
                        <Link to="/Examiner"><button className={sup.exam}>Examiner</button></Link>
                        <Link to="/User"><button className={sup.sinser}>User</button></Link>
                    </button>
                </div>
                <p>Choose One <Link to="/Signup2"><span>What's this?</span></Link></p>
                <div className={sup.mixin}>
                    <Link to="/Signin"><button className={sup.Back}>Back</button></Link>
                  
                </div>
            </div> */}
            {/* <div className="buttom">
                <p>Save and exit</p>
            </div> */}
       
        {/* <div className={sup.mainsub}>
        <div className={sup.third}>
            <div className={sup.first}>
                <div className={sup.name}>
                    <div>
                    <label>First Name</label>
                    </div>
                    <div>
                    <input type="text" name="text" placeholder="Name"/>
                    </div>
                </div>
                <div className={sup.surname}>
                    <div> <label>Surname</label></div>
                    <div><input type="text" name="text" placeholder="Surname"/></div>
                </div>
                <div className={sup.role}>
                    <div> <label>Role</label></div>
                    <div><input type="text" name="text" placeholder="Examiner     Examinee" /></div>
                </div>
            </div>
            <div className={sup.second}>
            <div className={sup.middlename}>
                    <div> <label>Middle Name</label></div>
                    <div><input type="text" name="text" placeholder="Middle Name" /></div>
                </div>
                <div className={sup.birthday}>
                    <div> <label>Birthday</label></div>
                    <div><input type="date" name="text" /></div>
                </div>
                <div className={sup.organisation}>
                    <div> <label>Organisation/Institution</label></div>
                    <div><input type="text" name="text" placeholder="Organisation/Institution" /></div>
                </div>
            </div>
        </div>
            <div className={sup.birthdaycode}>
                    <div> <label>Institution/Organisation Code/label</label></div>
                    <div><input type="text" name="text" placeholder="Code from Your Organisation or Institution" /></div>
            </div>
            <div className={sup.button}>
                <div className={sup.btn1}>
                     <Link to="/Signin"><button>Back</button></Link>
                     </div>
                <div className={sup.btn2}> 
                <Link to="/Signup2"><button>Next</button></Link>
                </div>
            </div>
            
        </div> */}
        
       
        </Flex>
     );
}
 
export default Sidebar;