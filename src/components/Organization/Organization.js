import {Link} from "react-router-dom";
import nas from './Organization.module.scss'
const Organization = () => {
    return ( 
        <div className={nas.all}>
            <div className={nas.sidebar}>
            <div className={nas.top}>
            <img src="images/logo.png" alt="" />
            </div>
            <div className={nas.write}>
               <ul>
                    <li className={nas.profile}><p>Profile Details</p></li>
                    <li  className={nas.orga}><p>Organisational/Institutional<br></br> Details</p></li>
                    <li><p>Confirm</p></li>
               </ul>
            </div>
            </div>
            <div className={nas.organ}>
                <h1>what are you registering as?</h1>
                <div className={nas.org}>
                <input type="text" id="text" placeholder="Organization"/>
                </div>
                <div className={nas.regis}>
                    <input type="text" id="text" placeholder="Name of Organization/Institution"/><br />
                    <input type="text" id="text" placeholder="Field of Organization/Institution"/><br />
                    <input type="text" id="text" placeholder="First Name"/><br />
                    <input type="text" id="text" placeholder="Surname"/><br />
                    <input type="text" id="text" placeholder="Middle Name"/>
                </div>
                <div className={nas.butt}>
                    <div className={nas.bac}>
                        <Link to="/Signup"><button>Back</button></Link>
                        </div>
                    <div className={nas.nes}>
                       <Link to="/Organization1"><button>Next</button></Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Organization;