import {Link} from "react-router-dom";
import per from './Organization2.module.scss'
const Pattern = () => {
    return ( 
        <div className={per.all}>
        <div className={per.sidebar}>
        <div className={per.top}>
        <img src="images/logo.png" alt="" />
        </div>
        <div className={per.write}>
           <ul>
                <li className={per.profile}><p>Profile Details</p></li>
                <li  className={per.orga}><p>Organisational/Institutional<br></br> Details</p></li>
                <li><p>Confirm</p></li>
           </ul>
        </div>
        </div>
        <div className={per.organ}>
            <h1>what are you registering as?</h1>
            <div className={per.org}>
            <input type="text" id="text" placeholder="Organization"/>
            </div>
            <div className={per.regis}>
                <input type="text" id="text" placeholder="Email"/><br />
                <input type="text" id="text" placeholder="Password"/><br />
                <input type="text" id="text" placeholder="Comfirm Password"/><br />
            </div>
            <div className={per.check}>
                <input type="checkbox" id="topping" name="topping"/>
                <label>Rememeber me</label><br />
            </div>
            <div className={per.check1}>
                <input type="checkbox" id="topping" name="topping"/>
                <label>I agree to all the terms and privacy policy</label>
            </div>
            <div className={per.butt}>
                <div className={per.bac}>
                <Link to="/Organization1"><button>Back</button></Link>
                    </div>
                <div className={per.nes}>
                   <Link to="/LandingPage"><button>Confirm</button></Link>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default Pattern;