
import { NavLink, Link } from "react-router-dom";
import sid from "./OrgSidebar.module.css";
import { SidebarData } from "./OrgData";

const OrgSidebar = () => {
  return (
    <>
      <div className={sid.Sidebar}>
        <Link to="/">
          <img src="images/logo.png" alt="" />
        </Link>
        <ul className={sid.SidebarList}>
          {SidebarData.map((val, key) => {
            return (
              <NavLink
                to={val.link}
                style={({isActive}) => ({
                  backgroundColor: isActive ? "rgb(2, 167, 90)" : "#056084",
                })}
                // activeStyle={{
                //   fontWeight: "bold",
                //   color: "red"
                // }}
                // className={({ isActive }) => (isActive ? "active" : "inactive")}
                // style={({ isActive }) => ({
                //   color: isActive ? "red" : "yellow",
                // })}
              >
                <li key={key} className={sid.row}>
                  <div id="icon" className={sid.icon}>
                    {val.icon}
                  </div>
                  <div id="title" className={sid.title}>
                    {val.title}
                  </div>
                </li>
              </NavLink>
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
  );
};
export default OrgSidebar;
