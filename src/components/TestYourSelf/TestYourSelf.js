import Sidebar from "../Sidebar/Sidebar";
import {Link} from "react-router-dom";
import PieNav from "../PieNav/PieNav";
import pee from  "./TestYourSelf.module.css"
 
const TestSelf = () => {
    return ( 
        <>
         <Sidebar/>
        <PieNav/>
        <div className={pee.test}>
            <div className={pee.tes}>
                  <h1>Test YourSelf!</h1>
            </div>
            <div className={pee.edu}>
                <label>Select your level of Education:</label>
                    <select id="dropdown">
                    <option>Choose your level of Education</option>
                    <option>Highschool</option>
                    <option>College/University</option>
                    <option>Professional</option>
                </select>
            </div>
            <div className={pee.exam}>
                <label>Choose your exam:</label>
                <select id="dropdown">   
                    <option>Choose your exam</option>
                    <option>WAEC</option>
                    <option>JAMB</option>
                    <option>NECO</option>
                </select>
            </div>
            <div className={pee.subject}>
                <label>Choose your Subject:</label>
                <select id="dropdown">   
                    <option>Choose your Subject</option>
                    <option>Mathematics</option>
                    <option>English</option>
                    <option>Chemistry</option>
                    <option>Biology</option>
                </select>
            </div>
            <div className={pee.topic}>
            <label>Choose your Topic:</label>
                <select id="dropdown">   
                    <option>Choose your Topic</option>
                    <option>Algebra</option>
                    <option>Differenciation</option>
                    <option>Leave blank</option>
                </select>
            </div>
            <div className="{pee.Bttn}">
            <Link to="/Recorder"><button>Start Quiz</button></Link>      
             </div>
        </div>
        </>
     );
}
 
export default TestSelf;