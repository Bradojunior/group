import {Link} from "react-router-dom";
import usee from './User.module.css'
const User = () => {
    return ( 
        <div className={usee.all}>
            <div className={usee.sidebar}>
            <div className={usee.top}>
            <img src="images/logo.png" alt="" />
            </div>
            <div className={usee.write}>
               <ul>
                    <li className={usee.profile}><p>Profile Details</p></li>
                    <li  className={usee.orga}><p>Organisational/Institutional<br></br> Details</p></li>
                    <li><p>Confirm</p></li>
               </ul>
            </div>
            </div>
            <div className={usee.organ}>
                <h1>what are you registering as?</h1>
                <div className={usee.org}>
                <input type="text" id="text" placeholder="User"/>
                </div>
                <div className={usee.regis}>
                    <input type="text" id="text" placeholder="First Name"/><br />
                    <input type="text" id="text" placeholder="Surname"/><br />
                    <input type="text" id="text" placeholder="Middle Name"/><br />
                    <input type="text" id="text" placeholder="Name of Organization/Institution"/><br />
                    <input type="text" id="text" placeholder="Organization/Institution code"/>
                </div>
                <div className={usee.butt}>
                    <div className={usee.bac}>
                    <Link to="/Signup"><button>Back</button></Link>
                        </div>
                    <div className={usee.nes}>
                       <Link to="/User1"><button>Next</button></Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default User;