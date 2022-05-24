import {Link} from "react-router-dom";
import sub from "./Signup2.module.css"
const Signup2 = () => {
    return ( 
        <div className={sub.many}>
        <div className={sub.sidebar}>
        <div className={sub.top}>
        <img src="images/logo.png" alt="" />
        </div>
        <div className={sub.write}>
           <ul>
                    <li className={sub.profile}><p>Profile Details</p></li>
                    <li  className={sub.organ}><p>Organisational/Institutional<br></br> Details</p></li>
                    <li><p>Confirm</p></li>

           </ul>
        </div>
        {/* <div className="buttom">
            <p>Save and exit</p>
        </div> */}
    </div>
        <div className={sub.many1}>
            <div><label>Matriculation number</label></div>
            <div><input type="text" placeholder='Matriculation number' /></div>
            <div><label>Registration number</label></div>
            <div><input type="text" placeholder='Registration number' /></div>
            <div><label>Department</label></div>
            <div><input type="text" placeholder='Department' /></div>
            <div><label>Program</label></div>
            <div><input type="text" placeholder='Program' /></div>
            <div className={sub.bett}>
            <div className={sub.bett1}>
                <Link to="/Signup"><button >Back</button></Link>
                </div>
            <div className={sub.bett2}>
             <Link to="/Signup3"><button >Next</button></Link>
                </div>
        </div>
        </div>
       
    </div>
     );
}
 
export default Signup2;