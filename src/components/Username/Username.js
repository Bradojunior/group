import Sidebar from "../Sidebar/Sidebar";
import PieNav from "../PieNav/PieNav";
import {IoMdContact} from "react-icons/io";
import {Stack, Flex, Box, Text, Image ,Heading,form,  Input ,Button} from "@chakra-ui/react"
import sern from './Username.module.css'
const Username = () => {
   const style =  { fontSize:"10rem"}
    return (  
       <>
       <Sidebar/>
        <PieNav/>
        <Stack  ml='25rem'>
           <Flex columnGap='5rem'>
              <Heading mt='3rem'>Change your profile picture</Heading>
              < IoMdContact style={style}/>
           </Flex>
           <form >
                    <Input my='.5rem' width='35rem' type="text" Id="text" placeholder="Username"/><br />
                    <Input my='.5rem' width='35rem' type="text" id="text" placeholder="name"/><br />
                    <Input my='.5rem' width='35rem' type="text" id="text" placeholder="email"/><br />
                    <Input my='.5rem' width='35rem' type="text" id="text" placeholder="date0fbirth"/><br />
                    <Input my='.5rem' width='35rem' type="text" id="text" placeholder="password"/><br />
                    <Input my='.5rem' width='35rem' type="text" id="text" placeholder="Confirm Password"/><br />
                    <Button ml='12rem' mt='3rem' width='8rem' bg='blue' color='white' _hover={{background:"blue", color:"white"}}>Save</Button>
            </form>
            
        </Stack>
        {/* <div className={sern.username}>
                <div className={sern.user}>
                   <div className={sern.you}><label>Change your profile picture</label> </div>
                   <div>< IoMdContact style={style}/></div>
                </div>
                <div className={sern.name}>
                   <label>Change your username</label> 
                   <input type="text" id="text" placeholder="Username"/>
                </div>
                <div className={sern.pwrd}>
                   <label>Change your password</label> 
                   <input type="text" id="text" placeholder="Password"/>
                </div>
                <div className={sern.vpwrd}>
                <label>Verify password</label>
                <input type="text" id="text" placeholder="Password"/>
                </div>
                <div class={sern.bnn}>
                <button>Save</button>        
             </div>
        </div> */}
        </>
    );
}
 
export default Username;