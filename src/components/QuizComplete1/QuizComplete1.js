import Sidebar from "../Sidebar/Sidebar";
import {Link} from "react-router-dom";
import PieNav from "../PieNav/PieNav";
import kui from './QuizComplete1.module.css'
const QuizComplete1 = () => {
    return (  
        <>
        <Sidebar/>
        <PieNav/>
        <div className={kui.complete1}>
             <div className={kui.com1}>
                    <h1>Quiz completed</h1>
            </div> 
            <div className={kui.success1}><p>You have successfully completed the quiz</p></div>
            <div className={kui.you1}>
                <h2>Your results have been <br /> recorded and sent to <br />your institution</h2>
            </div>
            <div class={kui.bttnn1}>
                <Link to="/PieChartPage"><button>Dashboard</button></Link>        
             </div>

        </div>
        </>
    );
}
 
export default QuizComplete1;