import { Flex,Box,Heading,Image,Select, ButtonGroup, VStack, Button, Spacer ,Text, FormControl, form,  FormLabel,Input , Stack ,Checkbox} from '@chakra-ui/react'
import {CgProfile} from "react-icons/cg"
import {Link} from "react-router-dom";
import './OrgNav.css';
const OrgNav = () =>{
    const style = {marginRight:"1rem"}
    const orgname = localStorage.getItem('orgname')
    return(
        <div className="PieNav">
        <div className="pie">
        <Link className="pie1"  to="/">Home</Link>
        <Link className="pie2" to="/About">About Us</Link>
        <CgProfile size={35} />
        <select name="drop-down" id="drop-dom">
            <option value=''>{orgname}</option>
        </select>
        </div>
    </div>
       
    )
}

export default OrgNav