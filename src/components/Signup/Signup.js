import {Link} from "react-router-dom";
import sup from "./Signup.module.scss"
const Sidebar = () => {
    return ( 
        <div className={sup.Mean}>
            <div className={sup.sidebar}>
                <div className={sup.top}>
                    <img src="images/logo.png" alt="" />
                </div>
                <div className={sup.write}>
                    <ul>
                        <li className={sup.profile}><p>Profile Details</p></li>
                        <li  className={sup.organ}><p>Organisational/Institutional<br></br> Details</p></li>
                        <li><p>Confirm</p></li>

                    </ul>
                </div>
            </div>
           
            <div className={sup.mainsub}>
                <h1>What are you registering as?</h1>
                <div>
                    <button className={sup.choose}>
                        <Link to="/Organization"><button className={sup.sinor}>Organisation</button></Link>
                        <Link to="/Examiner"><button className={sup.exam}>Examiner</button></Link>
                        <Link to="/User"><button className={sup.sinser}>User</button></Link>
                    </button>
                </div>
                <p>Choose One <Link to="/Signup2"><span>What's this?</span></Link></p>
                <div className={sup.mixin}>
                    <Link to="/Signin"><button className={sup.Back}>Back</button></Link>
                    {/* <button className={sup.Confirm}>Confirm</button> */}
                </div>
            </div>
            {/* <div className="buttom">
                <p>Save and exit</p>
            </div> */}
       
        {/* <div className={sup.mainsub}>
        <div className={sup.third}>
            <div className={sup.first}>
                <div className={sup.name}>
                    <div>
                    <label>First Name</label>
                    </div>
                    <div>
                    <input type="text" name="text" placeholder="Name"/>
                    </div>
                </div>
                <div className={sup.surname}>
                    <div> <label>Surname</label></div>
                    <div><input type="text" name="text" placeholder="Surname"/></div>
                </div>
                <div className={sup.role}>
                    <div> <label>Role</label></div>
                    <div><input type="text" name="text" placeholder="Examiner     Examinee" /></div>
                </div>
            </div>
            <div className={sup.second}>
            <div className={sup.middlename}>
                    <div> <label>Middle Name</label></div>
                    <div><input type="text" name="text" placeholder="Middle Name" /></div>
                </div>
                <div className={sup.birthday}>
                    <div> <label>Birthday</label></div>
                    <div><input type="date" name="text" /></div>
                </div>
                <div className={sup.organisation}>
                    <div> <label>Organisation/Institution</label></div>
                    <div><input type="text" name="text" placeholder="Organisation/Institution" /></div>
                </div>
            </div>
        </div>
            <div className={sup.birthdaycode}>
                    <div> <label>Institution/Organisation Code/label</label></div>
                    <div><input type="text" name="text" placeholder="Code from Your Organisation or Institution" /></div>
            </div>
            <div className={sup.button}>
                <div className={sup.btn1}>
                     <Link to="/Signin"><button>Back</button></Link>
                     </div>
                <div className={sup.btn2}> 
                <Link to="/Signup2"><button>Next</button></Link>
                </div>
            </div>
            
        </div> */}
        
        </div>
        
     );
}
 
export default Sidebar;