// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
// import home from "./Home.module.css"
import {BsFillArrowRightSquareFill} from "react-icons/bs";
import First from '../First/First'
import {Container, Col, Row} from "react-bootstrap"
import {Link} from "react-router-dom"
const Home = () =>{
    return(
        <>
        <First/>
        <div className="main">
        <main  style={{background:"cover" ,height:"auto"}}>
            <Container  style={{paddingTop:"6rem", height:"auto", color:"white" }}>
                <Row>
                    <Col md>
                    <div  className="people">
                        <img
                        src="images/people.png" alt="" 
                        style={{height:"25rem", width:"35rem"}}
                    />
                    </div>
                    </Col>
                    <Col md>
                    <img 
                    src='images/circle.png' alt=""
                    style={{height:"25rem", width:"32rem"}}
                    />
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <h1>Quizzy</h1>
                        <h3>Unlocking Knowledge at the <br></br>speed of thought</h3>
                        <p>
                        Quizzy app is an   Necessitatibus magnam qui totam natus. Eum porro <br></br>hic temporibus ut laudantium, sunt recusandae nam <br></br>incidunt rem aperiam, tempora, repellat commodi<br></br> inventore quia!
                        </p>
                    </Col>
                    <Col>
                        <h3 style={{marginLeft:"4rem"}}>Sign in above or type profile code here</h3>
                        <div className="flex" class="d-flex">
                            <div><input type="text" name='text' placeholder='Profile Code' style={{width:"30rem", padding:"1rem", border:"none" ,borderRadius:"5px"}} /></div>
                            <div><Link to="/Recorder"><button style={{backgroundColor:"blue", height:"3.5rem", width:"4rem",border:"none"}}><BsFillArrowRightSquareFill size={50}/></button></Link></div>
                        </div>
                    </Col>
                    </Row>
            </Container>
        </main>
        <footer style={{backgroundColor:"rgb(46, 46, 78)"}}>
            <Container className='px-4 text-white text-center'>
                <h6>Need Help? <span style={{color:'blue'}}>Click Here</span> </h6>
                <h2>Copyright Quizzy 2022</h2>
                <button style={{backgroundColor:"transparent",border:"1px solid black"}}>Terms&Conditions</button>
            </Container>
        </footer>
        
    
       
     </div>
     </>
          
     )
 }
 export default Home;