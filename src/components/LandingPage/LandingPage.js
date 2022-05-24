import SecondNavbar from '../SecondNavbar/SecondNavbar';
import Footer from '../Footer/Footer';
import {Link} from "react-router-dom";
import lab from  './LandingPage.module.css';
const LandingPage = () => {
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
                    <h3>Landing Page UI Deseign</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Necessitatibus magnam qui totam natus. Eum porro <br></br>hic temporibus ut laudantium, sunt recusandae nam <br></br>incidunt rem aperiam, tempora, repellat commodi<br></br> inventore quia!
                    </p>
                </div>
                <div className={lab.writeup2}>
                    <h3>Type Your Quiz code here</h3>
                    <input type="text" name='text' placeholder='Quiz Code'/>
                    <div className={lab.but}>
                        <Link to="/PieChartPage"><button>Dashboard</button></Link>
                        </div>
                </div>
            </div>
            <Footer/>
       </div>
    );
}
 
export default LandingPage;