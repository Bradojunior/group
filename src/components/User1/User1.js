import {Link} from "react-router-dom";
import use from './User1.module.css'
const User1 = () => {
    return ( 
        <div className={use.all}>
            <div className={use.sidebar}>
            <div className={use.top}>
            <img src="images/logo.png" alt="" />
            </div>
            <div className={use.write}>
               <ul>
                    <li className={use.profile}><p>Profile Details</p></li>
                    <li  className={use.orga}><p>Organisational/Institutional<br></br> Details</p></li>
                    <li><p>Confirm</p></li>
               </ul>
            </div>
            </div>
            <div className={use.organ}>
                <h1>what are you registering as?</h1>
                <div className={use.org}>
                <input type="text" id="text" placeholder="User"/>
                </div>
                <div className={use.regis}>
                    <input type="text" id="text" placeholder="Department"/><br />
                    <input type="text" id="text" placeholder="Staff Identification Number"/><br />
                    <input type="text" id="text" placeholder="City"/><br />
                    <input type="text" id="text" placeholder="Zipcode"/><br />
                    <input type="text" id="text" placeholder="Address"/>
                </div>
                <div className={use.butt}>
                    <div className={use.bac}>
                    <Link to="/User"><button>Back</button></Link>
                        </div>
                    <div className={use.nes}>
                       <Link to="/User2"><button>Next</button></Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default User1;