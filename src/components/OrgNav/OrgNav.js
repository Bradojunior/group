import { Flex,Box,Heading,Image,Select, ButtonGroup, VStack, Button, Spacer ,Text, FormControl, form,  FormLabel,Input , Stack ,Checkbox} from '@chakra-ui/react'
import {CgProfile} from "react-icons/cg"
import {Link} from "react-router-dom";
import './OrgNav.css';
const OrgNav = () =>{
    const style = {marginRight:"1rem"}
    return(
        <div className="PieNav">
        <div className="pie">
        <Link className="pie1"  to="/">Home</Link>
        <Link className="pie2" to="/About">About Us</Link>
        <CgProfile size={35} />
        <select name="drop-down" id="drop-dom">
            <option value=""><Link to="/pieChartPage">Brandon</Link></option>
            <option value="Username"><Link to="/TakeQuiz">Chioma</Link></option>
            <option value="Username">Nasuk</option>
            <option value="Username">Christ</option>
        </select>
        </div>
    </div>
        // <Stack  h='3rem' w='100%' boxShadow='md' alignItems='center' bg='#FFFFFF' position='absolute'>
        //     <Flex ml='auto' alignItems='center'>
        //         <Heading as={Text} fontSize='1.5rem'>Home</Heading>
        //         <Heading as={Text} fontSize='1.5rem' mr='3rem' mx='3rem'>About</Heading>
        //         <CgProfile size={35} style={style}/>
        //         <Select  borderColor='blue' name="" id=""  placeholder='Orgname' w='10rem'>
        //             <option value="">Brandon</option>
        //             <option value="">Christ</option>
        //             <option value="">Chioma</option>
        //             <option value="">Nasuk</option>
        //         </Select>
        //     </Flex>
        // </Stack>
    )
}

export default OrgNav