import Sidebar from "../Sidebar/Sidebar";
import PieNav from "../PieNav/PieNav";
import pro from './Problem.module.css'
const Problem = () => {
    return ( 
        <>
        <Sidebar/>
        <PieNav/>
        <div className={pro.category}>
            <div className={pro.cat}>
            <label>Category</label>
                <select id="dropdown">   
                    <option>Category</option>
                    <option>Quiz</option>
                    <option>Account</option>
                    <option>Feedback</option>
                </select>
                </div>
                <div className={pro.sub}>
                   <label>Subject</label> 
                   <input type="text" id="text" placeholder="Subject"/>
                </div>
                <div className={pro.ema}>
                   <label>Email</label> 
                   <input type="text" id="text" placeholder="Email"/>
                </div>
                <div className={pro.description}>
                   <label>Description of problem</label><br />
                    <textarea name="textarea" id="" cols="50" rows="50">Tell us about your problem</textarea>
                </div>
                <div className={pro.brief}>
                    <p>Briefly describe the situation our support team will get back to you as soon as possible</p>
                </div>
                <div class={pro.bnn}>
                <button>Submit</button>        
             </div>
        </div>
        </>
     );
}
 
export default Problem;