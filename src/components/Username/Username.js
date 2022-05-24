import Sidebar from "../Sidebar/Sidebar";
import PieNav from "../PieNav/PieNav";
import {IoMdContact} from "react-icons/io";
import sern from './Username.module.css'
const Username = () => {
   const style =  { fontSize:"15rem", marginRight:"4rem"}
    return (  
       <>
       <Sidebar/>
        <PieNav/>
        <div className={sern.username}>
                <div className={sern.user}>
                   <div className={sern.you}><label>Change your profile picture</label> </div>
                   <div>< IoMdContact style={style}/></div>
                </div>
                <div className={sern.name}>
                   <label>Change your username</label> 
                   <input type="text" id="text" placeholder="Username"/>
                </div>
                <div className={sern.pwrd}>
                   <label>Change your password</label> 
                   <input type="text" id="text" placeholder="Password"/>
                </div>
                <div className={sern.vpwrd}>
                <label>Verify password</label>
                <input type="text" id="text" placeholder="Password"/>
                </div>
                <div class={sern.bnn}>
                <button>Save</button>        
             </div>
        </div>
        </>
    );
}
 
export default Username;