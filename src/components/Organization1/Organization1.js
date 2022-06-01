import {Link} from "react-router-dom";
import cer from './Organization1.module.scss'
const Organize = () => {
    return ( 
        <div className={cer.all}>
            <div className={cer.sidebar}>
            <div className={cer.top}>
            <img src="images/logo.png" alt="" />
            </div>
            <div className={cer.write}>
               <ul>
                    <li className={cer.profile}><p>Profile Details</p></li>
                    <li  className={cer.orga}><p>Organisational/Institutional<br></br> Details</p></li>
                    <li><p>Confirm</p></li>
               </ul>
            </div>
            </div>
            <div className={cer.organ}>
                <h1>what are you registering as?</h1>
                <div className={cer.org}>
                <input type="text" id="text" placeholder="Organization"/>
                </div>
                <div className={cer.regis}>
                    <input type="text" id="text" placeholder="Country"/><br />
                    <input type="text" id="text" placeholder="State"/><br />
                    <input type="text" id="text" placeholder="City"/><br />
                    <input type="text" id="text" placeholder="Zipcode"/><br />
                    <input type="text" id="text" placeholder="Address"/>
                </div>
                <div className={cer.butt}>
                    <div className={cer.bac}>
                    <Link to="/Organization"><button>Back</button></Link>
                        </div>
                    <div className={cer.nes}>
                       <Link to="/Organization2"><button>Next</button></Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Organize;