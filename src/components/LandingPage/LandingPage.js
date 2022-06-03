import SecondNavbar from '../SecondNavbar/SecondNavbar';
import {Link} from "react-router-dom";
import lab from  './LandingPage.module.css';
import {Stack, Flex, Box, Text, Image ,Heading,  Input ,Button} from "@chakra-ui/react"
import {useMediaQuery} from "@chakra-ui/react"
import {BsFillArrowRightSquareFill} from "react-icons/bs";
import First from '../First/First'
import Footer from '../Footer/Footer'
import {Container} from "react-bootstrap"
const LandingPage = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:680px)");
    // const white = { color:"white"}
    return ( 
        <>
        <First/>
            <Stack  bg='rgb(46, 46, 78)' h='auto' w='100%' pt='5rem' overflowX='hidden' alignContent='center' justifyContent='center'>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} columnGap='3rem'>
                    <Image 
                    h='30rem' 
                    w='40rem' 
                    w={[300, 400, 600]}
                    alignSelf='center' 
                    src='images/people.png'/>
                    <Image  ml={isNotSmallerScreen ? "null" : "3rem"} h='25rem' mt='3rem' w='35rem' src='images/contact.png' w={[300, 400, 600]}/>
                </Flex>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} columnGap='10rem'>
                    <Box color='white' ml={isNotSmallerScreen ? "4rem" : "null"} mb={isNotSmallerScreen ? "null" : "2rem"}>
                        <Heading  fontSize="3rem">Quizzy</Heading>
                        <Heading as='h3' fontSize={{ base: '22px', md: '40px', lg: '35px' }}>Unlocking Knowledge at the <br></br>speed of thought</Heading>
                        <Text> Quizzy app is an   Necessitatibus magnam qui totam natus. Eum porro <br></br>hic temporibus ut laudantium, sunt recusandae nam <br></br>incidunt rem aperiam, tempora, repellat commodi<br></br> inventore quia!</Text>
                    </Box>
                    <Box  mb={isNotSmallerScreen ? "null" : "2rem"}>
                        <Heading as='h6' color='white' fontSize='1.5rem' fontSize={{ base: '`20px', md: '40px', lg: '27px' }}>Sign in above or type profile code here</Heading>
                        <Flex>
                        <Box>
                            <Input type="text" name='text' placeholder='Profile Code' w='20rem' w={[300, 600, 500]}/>
                        </Box>
                       
                        <Box>
                        <Link to="/Recorder"><Button ><BsFillArrowRightSquareFill size={40}  color='blue'/></Button></Link>
                        </Box>
                        
                        </Flex>
                        <Link to="/AdminPage"  ><Button color='white' _hover={{color:"white"}} bg='blue' mt='5rem' ml='15rem'>Dashboard</Button></Link>
                    </Box>
                </Flex>
               
            </Stack>
             <Footer/>
     </>

    //     <div className={lab.landing}>
    //         <SecondNavbar/>
    //         <div className={lab.photos}>
    //           <div className={lab.photo1}>
    //               <img src="images/people.png" alt="" />
    //           </div>
    //           <div className={lab.photo2}>
    //             <img src="images/contact.png" alt="" />
    //         </div>  
    //         </div>
            
    //         <div className={lab.writeup}>
    //             <div className={lab.writeup1}>
    //                 <h1>Quizzy</h1>
    //                 <h3>Unlocking Knowledge at the <br></br>speed of thought</h3>
    //                 <p>
    //                     Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Necessitatibus magnam qui totam natus. Eum porro <br></br>hic temporibus ut laudantium, sunt recusandae nam <br></br>incidunt rem aperiam, tempora, repellat commodi<br></br> inventore quia!
    //                 </p>
    //             </div>
    //             <div className={lab.writeup2}>
    //                 <h3>Type Your Quiz code here</h3>
    //                 <div className="mean" class="d-flex">
    //                 <input type="text" name='text' placeholder='Quiz Code'/>
    //                 <div><Link to="/Recorder"><button style={{backgroundColor:"blue", height:"4.5rem", width:"4rem",border:"none"}}><BsFillArrowRightSquareFill white={white} size={50} /></button></Link></div>
    //                 </div>
    //                 <div className={lab.but}>
    //                     <Link to="/AdminPage"><button>Dashboard</button></Link>
    //                     </div>
    //             </div>
    //         </div>
    //         <footer style={{backgroundColor:"rgb(46, 46, 78)"}}>
    //         <Container className='px-4 text-white text-center'>
    //             <h6>Need Help? <span style={{color:'blue'}}>Click Here</span> </h6>
    //             <h2>Copyright Quizzy 2022</h2>
    //             <button style={{backgroundColor:"transparent",border:"1px solid black"}}>Terms&Conditions</button>
    //         </Container>
    //     </footer>
            
    //    </div>
    );
}
 
export default LandingPage;