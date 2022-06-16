import { Flex,Box,Heading,Image, ButtonGroup, VStack, Button, Spacer ,Text, FormControl, form,  FormLabel,Input , Stack ,Checkbox} from '@chakra-ui/react'
import {MdOutlineDashboardCustomize, MdQuiz} from "react-icons/md"
import {GiBookmarklet} from "react-icons/gi"
import {FiSettings} from "react-icons/fi"
import {FaHireAHelper} from "react-icons/fa"
import {Link} from "react-router-dom";
import sid from'./OrgSidebar.module.css';
import { SidebarData } from './OrgData';

const OrgSidebar =()=>{
    return(
        <>
        <div className={sid.Sidebar}>
            <img src="images/logo.png" alt="" />
              <ul className={sid.SidebarList}>
           {SidebarData.map((val, key)=>{
               return(
                <li key={key}
                className={sid.row}
                id={window.location.pathname === val.link ? "active" : ""}
                 onClick={()=>{window.location.pathname = val.link}}>
                   {" "}
                   <div id='icon' className={sid.icon}>{val.icon}</div>{" "}
                   <div id='title' className={sid.title}>
                       {val.title}
                   </div>
                   </li>
               );
           })}
           </ul>
        </div>
        {/* <Stack h='100vh' w='16rem' bg='rgb(71, 71, 99)' color='white'>
            <Image m='3rem' src="images/logo.png" alt="" h='4rem' w='4rem'/>
            <Flex direction="column">
                <Box w='100%' mb='1rem'>
                    <Link to="/OrgNav"><Flex h='3.5rem' w='100%' bg='#056084' _hover={{color:"white", background:'#13aae6'}} columnGap='1rem' alignItems='center' alignContent='center' justifyContent="center" >
                        <MdOutlineDashboardCustomize size={45}/>
                        <Heading fontSize="1.5rem" >Dashboard</Heading>
                    </Flex></Link>
                </Box>
                <Box w='100%' mb='1rem'>
                    <Link to="/me"><Flex h='3.5rem' w='100%' bg='#056084' _hover={{color:"white", background:'#13aae6'}} columnGap='1rem' alignItems='center' alignContent='center' justifyContent="center" >
                        <MdQuiz size={45}/>
                        <Heading fontSize="1.5rem" >Create Quiz</Heading>
                    </Flex></Link>
                </Box>
                <Box w='100%' mb='1rem'>
                    <Link to="/me"><Flex h='3.5rem' w='100%' bg='#056084' _hover={{color:"white", background:'#13aae6'}} columnGap='1rem' alignItems='center' alignContent='center' justifyContent="center" >
                        <GiBookmarklet size={45}/>
                        <Heading fontSize="1.5rem" >My Courses</Heading>
                    </Flex></Link>
                </Box>
                <Box w='100%' mb='1rem'>
                    <Link to="/me"><Flex h='3.5rem' w='100%'columnGap='1rem' bg='#056084' _hover={{color:"white", background:'#13aae6'}}  alignItems='center' alignContent='center' justifyContent="center" >
                        <FiSettings size={45}/>
                        <Heading fontSize="1.5rem" mr='3rem'>Settings</Heading>
                    </Flex></Link>
                </Box>
                <Box w='100%'>
                    <Link to="/me"><Flex h='3.5rem' w='100%' columnGap='1rem' bg='#056084' _hover={{color:"white", background:'#13aae6'}}  alignItems='center' alignContent='center' justifyContent="center" >
                        <FaHireAHelper size={45}/>
                        <Heading fontSize="1.5rem" mr='5rem'>Help</Heading>
                    </Flex></Link>
                </Box>
            </Flex>
        </Stack> */}
        </>
    )
}
export default OrgSidebar;