import qui from './QuizComplete.module.css';
import Sidebar from "../Sidebar/Sidebar";
import {Link} from "react-router-dom";
import PieNav from "../PieNav/PieNav";
const QuizComplete = () => {
    return ( 
        <>
        <Sidebar/>
        <PieNav/>
        <div className={qui.complete}>
            <div className={qui.com}>
                    <h1>Quiz completed</h1>
            </div> 
            <div className={qui.success}>
                <h3>You have successfully completed the quiz</h3>
            </div>
            <div className={qui.you}>
                <h2>You answered <span className={qui.percent}>80% </span>of <br /> the questions correctly</h2>
            </div>
            <div className={qui.click}>
                <div className={qui.here}>click here!</div>
            <div>to see what you got wrong</div>
            </div>
            <div class={qui.Mee}>
                <Link to="/QuizComplete1"><button>Next</button></Link>        
             </div>
        </div>
        </>
     );
}
 
export default QuizComplete;