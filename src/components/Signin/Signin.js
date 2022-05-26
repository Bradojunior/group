import React from "react";
import {Link} from "react-router-dom";
// import {Container, Col, Row, Form, Button, } from "react-bootstrap"
import sin from "./Signin.module.css"


const Home= () => {
    return ( 
      //  <div className="my" class="text-white">
          
      //       <Row style={{backgroundColor:"#042A37", height:"100vh",width:"100%"}}>
      //       <Container>
      //          <Col>
      //             <div className="header" class="d-flex">
      //                <div class="mx-5 mt-5"><img src="images/logo.png" alt="" /></div>
      //                <div class="ml-auto" style={{marginLeft:"auto"}}><p>Don't have an account? <span class="text-primary">Sign Up!</span></p></div>
      //             </div>
      //             <div className="welcome" class="text-center">
      //                <h1>Welcome </h1>
      //                <p>Login in to your account</p>
      //             </div>
                  
      //                <Form class="text-center j-center" >
      //                   <Container>
      //                      <Form.Control type="email" placeholder="Enter Email " class="py-3 px-20"/>
      //                      <Form.Control type="password" placeholder="Password" />
      //                      <div className="check" class="d-flex">
      //                         <div style={{marginLeft:"5rem"}}><Form.Check type="checkbox" label="Remember me" /></div>
      //                         <div style={{ marginLeft:"45rem"}}><Form.Check type="checkbox" label="Recorver Password" /></div>
      //                      </div>
      //                      <Button style={{marginLeft:"30rem", width:"10rem"}}>Login</Button>
      //                   </Container>
      //                </Form>
      //          </Col>
      //       </Container>
      //       </Row>
         
      //  </div>
     
       <div className={sin.general}>
         <div className={sin.div1}>
            <div className={sin.firstpart}>
               <img src="images/logo.png"alt='' />
               <p1>Dont have an account?</p1>
               <Link to="/Signup"><p2>sign up!</p2></Link>
            </div>
             <div className={sin.secondpart}>
                <h1>Welcome</h1>
                <p>Login into your account</p>
            </div>
            
             <div className={sin.thirdpart}>
             <form>
               <div className={sin.email}>
                <input type="email" name="email"placeholder="Email" /><br></br>
                </div>
                <div className={sin.pass}>
                <input type="password" name="password"placeholder="Password"/>
                </div>
              </form>
             </div>
             <div className={sin.message}>
              <div className={sin.remember}>
                 <p>Remember me</p>
              </div>
              <div className={sin.recover}>
                 <p>Recover password</p>
              </div>
             </div>
             <div className={sin.botton}>
                 <Link to="/LandingPage"><button>Log In</button></Link>
             </div>

        </div>
        <div className={sin.div2}>
             <img src="images/people.png" alt="" />
           <h1>Quizzy</h1>
           <div className={sin.landingpage}>
           <h3>Landing page UI Design</h3>
           </div>
       
           <p>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br></br>
           Quae aut nulla, autem dolores e illum quibusdam  corrupti<br></br>
           nam reiciendis assumenda temporibus dolorum quo vitae!<br></br>
           Expedita deleniti dolorem debitis incidunt.<br></br>
           </p>
         
        </div>
    </div>
        
     );
}
 
export default Home;
