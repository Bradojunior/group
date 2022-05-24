import React from "react";
import {Link} from "react-router-dom";
import sin from "./Signin.module.css"


const Home= () => {
    return ( 
     
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
