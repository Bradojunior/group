import {Link} from "react-router-dom";
import us from './User2.module.css'
const User2 = () => {
    return ( 
        <div className={us.all}>
        <div className={us.sidebar}>
        <div className={us.top}>
        <img src="images/logo.png" alt="" />
        </div>
        <div className={us.write}>
           <ul>
                <li className={us.profile}><p>Profile Details</p></li>
                <li  className={us.orga}><p>Organisational/Institutional<br></br> Details</p></li>
                <li><p>Confirm</p></li>
           </ul>
        </div>
        </div>
        <div className={us.organ}>
            <h1>Register as an Organization</h1>
            <div className={us.org}>
            <input type="text" id="text" placeholder="User"/>
            </div>
            <div className={us.regis}>
                <input type="text" id="text" placeholder="Email"/><br />
                <input type="text" id="text" placeholder="Password"/><br />
                <input type="text" id="text" placeholder="Comfirm Password"/><br />
            </div>
            <div className={us.check}>
                <input type="checkbox" id="topping" name="topping"/>
                <label>Rememeber me</label><br />
            </div>
            <div className={us.check1}>
                <input type="checkbox" id="topping" name="topping"/>
                <label>I agree to all the terms and privacy policy</label>
            </div>
            <div className={us.butt}>
                <div className={us.bac}>
                <Link to="/User1"><button>Back</button></Link>
                    </div>
                <div className={us.nes}>
                   <Link to="/LandingPage"><button>Confirm</button></Link>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default User2;