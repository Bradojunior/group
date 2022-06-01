import SecondNavbar from '../SecondNavbar/SecondNavbar';
import {Link} from "react-router-dom";
import lab from  './LandingPage.module.css';
import {BsFillArrowRightSquareFill} from "react-icons/bs";
import {Container} from "react-bootstrap"
const LandingPage = () => {
    const white = { color:"white"}
    return ( 
        <div className={lab.landing}>
            <SecondNavbar/>
            <div className={lab.photos}>
              <div className={lab.photo1}>
                  <img src="images/people.png" alt="" />
              </div>
              <div className={lab.photo2}>
                <img src="images/contact.png" alt="" />
            </div>  
            </div>
            
            <div className={lab.writeup}>
                <div className={lab.writeup1}>
                    <h1>Quizzy</h1>
                    <h3>Unlocking Knowledge at the <br></br>speed of thought</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Necessitatibus magnam qui totam natus. Eum porro <br></br>hic temporibus ut laudantium, sunt recusandae nam <br></br>incidunt rem aperiam, tempora, repellat commodi<br></br> inventore quia!
                    </p>
                </div>
                <div className={lab.writeup2}>
                    <h3>Type Your Quiz code here</h3>
                    <div className="mean" class="d-flex">
                    <input type="text" name='text' placeholder='Quiz Code'/>
                    <div><Link to="/Recorder"><button style={{backgroundColor:"blue", height:"4.5rem", width:"4rem",border:"none"}}><BsFillArrowRightSquareFill white={white} size={50} /></button></Link></div>
                    </div>
                    <div className={lab.but}>
                        <Link to="/AdminPage"><button>Dashboard</button></Link>
                        </div>
                </div>
            </div>
            <footer style={{backgroundColor:"rgb(46, 46, 78)"}}>
            <Container className='px-4 text-white text-center'>
                <h6>Need Help? <span style={{color:'blue'}}>Click Here</span> </h6>
                <h2>Copyright Quizzy 2022</h2>
                <button style={{backgroundColor:"transparent",border:"1px solid black"}}>Terms&Conditions</button>
            </Container>
        </footer>
            
       </div>
    );
}
 
export default LandingPage;