import First from '../First/First';
//  import about from "./About.module.css"
 import {Container, Row, Col, Card} from "react-bootstrap"
 import Footer from '../Footer/Footer'
 import {Box, Stack, Heading, Text, Flex, Image} from "@chakra-ui/react"
const About = () => {
    return ( 
        <>
        <First/>
        <Stack h='auto' w='100%' color='white' textAlign='center' bg='rgb(67, 67, 104)' pt='4rem' justifyContent='center'>
            <Heading>Quizzy comes with amazing</Heading>
            <Heading>features like</Heading>
            <Flex textAlign='center' justifyContent='center' columnGap='10rem' pt='1rem'>
                <Box boxShadow='2xl' p='6' rounded='md'>
                <Image ml='6rem' src="images/Vector1.png" alt="" />
                <Text>Taking exams with your devices</Text>
                <Text>easily</Text>
                </Box>
       
                <Box boxShadow='2xl' p='6' rounded='md'>
                <Image ml='6rem'  src="images/Vector2.png" alt="" />
                <Text>Plenty of Tests to help you prepare</Text>
                <Text>for your exams</Text>
                </Box>
        
                <Box boxShadow='2xl' p='6' rounded='md'>
                <Image ml='6rem'  src="images/Vector3.png" alt="" />
                <Text>Detailed statistics showing your</Text>
                <Text>progress across your tests</Text>
                </Box>
        </Flex>
            <Heading textAlign='center'>What our clients say</Heading>
            <Text textAlign='center'>see what our customer say about us. It really matter for us. <br/> How good or bad
                        We will make it for evaluation to make Quizzy better.</Text>
        <Flex textAlign='center' pt='2rem' justifyContent='center' columnGap='5rem' pb='2rem'>
            <Box>
                <Text boxShadow='2xl' p='6' rounded='md' bg='rgb(67, 67, 104)' >Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Iste, dicta saepe? Labore recusandae <br /> nostrum reiciendis, quas dolorem <br /> repudiandae delectus. Libero similique, <br /> dolore doloribus voluptas vel facere <br /> quasi repellat numquam. Adipisci!</Text>
            </Box>
            <Box>
                <Text boxShadow='2xl' p='6' rounded='md' bg='rgb(67, 67, 104)'  >Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Iste, dicta saepe? Labore recusandae <br /> nostrum reiciendis, quas dolorem <br /> repudiandae delectus. Libero similique, <br /> dolore doloribus voluptas vel facere <br /> quasi repellat numquam. Adipisci!</Text>
            </Box>
            <Box>
                <Text boxShadow='2xl' p='6' rounded='md' bg='rgb(67, 67, 104)' >Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Iste, dicta saepe? Labore recusandae <br /> nostrum reiciendis, quas dolorem <br /> repudiandae delectus. Libero similique, <br /> dolore doloribus voluptas vel facere <br /> quasi repellat numquam. Adipisci!</Text>
            </Box>
            
        </Flex>
        </Stack>
        <Footer/>
        </>
            /* <div className="about" class=" w-100 h-auto mt-10 text-white" style={{paddingTop:"5rem", backgroundColor:"rgb(67, 67, 104)"}}>
                <Container>
                    <div className="header" class="text-center text-white mt-20">
                        <h1>Quizzy comes with amazing</h1>
                        <h1>features like </h1>
                    </div>
                    <div className="mean" class="text-center mt-5">
                        <Row>
                            <Col>
                                <img src="images/Vector1.png" alt="" />
                                <p>Taking exams with your devices</p>
                                <p class="mt-0">easily</p>
                            </Col>
                            <Col>
                                <img src="images/Vector2.png" alt="" />
                                <p>Plenty of Tests to help you prepare </p>
                                <p>for your exams</p>
                            </Col>
                            <Col>
                                <img src="images/Vector3.png" alt="" />
                                <p>Detailed statistics showing your</p>
                                <p>progress across your tests</p>

                            </Col>
                        </Row>
                    </div>
                    <div className="page" class="text-center">
                        <h1>What our clients say</h1>
                        <p>see what our customer say about us. It really matter for us. <br/> How good or bad
                        We will make it for evaluation to make Quizzy better.</p>
                    </div>
                    <div className="card" class="text-center text-dark df mt-4 mb-3" style={{display:"flex"}}>
                        <Card  class="bg-success shadow mx-2 br-10" style={{width:"22rem"}}>
                            <Card.Body>
                                <Card.Text>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus magnam qui totam natus. Eum porro hic temporibus ut laudantium, sunt recusandae nam incidunt rem aperiam, tempora, repellat commodiinventore quia!</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card  class="bg-success shadow mx-3" style={{width:"23rem"}}>
                            <Card.Body>
                                <Card.Text>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus magnam qui totam natus. Eum porro hic temporibus ut laudantium, sunt recusandae nam incidunt rem aperiam, tempora, repellat commodi inventore quia!</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card  class="bg-success shadow mx-3" style={{width:"22rem"}}>
                            <Card.Body>
                                <Card.Text>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus magnam qui totam natus. Eum porro hic temporibus ut laudantium, sunt recusandae nam incidunt rem aperiam, tempora, repellat commodi inventore quia!</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    
                </Container>
                <footer style={{backgroundColor:"rgb(46, 46, 78)"}}>
                        <Container className='px-4 text-white text-center'>
                            <h6>Need Help? <span style={{color:'blue'}}>Click Here</span> </h6>
                            <h2>Copyright Quizzy 2022</h2>
                            <button style={{backgroundColor:"transparent",border:"1px solid black"}}>Terms&Conditions</button>
                        </Container>
                    </footer>
            </div> */
        
        
       /* <div className={about.about}>
         <div className={about.comment}><b></b>
         <div className={about.comment1}>
             <h1>Quizzy comes with amazing</h1>
             <h1>features like this</h1>
         </div>
         <div className={about.comment2}>
             <div className={about.computer}>
             <img src="images/Vector1.png" alt="" />
                 <p>Taking exams with your devices</p>
                 <p>easily</p>
             </div>
             <div className={about.book}>
             <img src="images/Vector2.png" alt="" />
                 <p>Plenty of Tests to help you prepare </p>
                 <p>for your exams</p>
             </div>
             <div className={about.network}>
             <img src="images/Vector3.png" alt="" />
                 <p>Detailed statistics showing your</p>
                 <p>progress across your tests</p>

                
             </div>
         </div>
     </div>
     <div className={about.customer}>
         <div className={about.customer1}>
             <h1>What our clients say</h1>
             <p>see what our customer say about us. It really matter for us. How good or bad</p>
             <p>We will make it for evaluation to make Quizzy better.</p>
         </div>
         <div className={about.customer2}>
             <div className="one"><p> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Necessitatibus magnam qui totam natus. Eum porro <br></br>hic temporibus ut laudantium, sunt recusandae nam <br></br>incidunt rem aperiam, tempora, repellat commodi<br></br> inventore quia!</p></div>
             <div className="two"><p> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Necessitatibus magnam qui totam natus. Eum porro <br></br>hic temporibus ut laudantium, sunt recusandae nam <br></br>incidunt rem aperiam, tempora, repellat commodi<br></br> inventore quia!</p></div>
             <div className="three"><p> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Necessitatibus magnam qui totam natus. Eum porro <br></br>hic temporibus ut laudantium, sunt recusandae nam <br></br>incidunt rem aperiam, tempora, repellat commodi<br></br> inventore quia!</p></div>
         </div>
     </div>
        <footer style={{backgroundColor:"rgb(46, 46, 78)"}}>
            <Container className='px-4 text-white text-center'>
                <h6>Need Help? <span style={{color:'blue'}}>Click Here</span> </h6>
                <h2>Copyright Quizzy 2022</h2>
                <button style={{backgroundColor:"transparent",border:"1px solid black"}}>Terms&Conditions</button>
            </Container>
        </footer>
    
     </div>   */
   
    
     );
}
 
export default About;