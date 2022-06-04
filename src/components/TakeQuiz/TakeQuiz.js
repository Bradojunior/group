import Sidebar from "../Sidebar/Sidebar";
import {Link} from "react-router-dom";
import {Box, Button,Text, Flex, Stack,Image, Heading , Radio} from "@chakra-ui/react";
import PieNav from "../PieNav/PieNav";
import take  from './TakeQuiz.module.css'
const TakeQuiz = () => {
    return ( 
        <>
         <Sidebar/>
        <PieNav/>
            <div className={take.qui}>
                    <div className={take.b}>
                     <div className={take.q}>
                        <h1>Take Quiz!</h1><br />
                        </div>
                        <p className={take.en}>Type your quiz code</p>
                        <div className={take.i}><input type="text" name="quiz code" placeholder="Quiz Code"/></div>
                        <div className={take.int}>
                        <h2>Quiz Instructions!</h2>
                        </div>
                        </div>
                
                    <div class={take.btn}>
                        <Link to="/QuizInstruct"><button>Start Quiz</button></Link>
                        
                    </div>
            </div>
            </>
     );
}
 
export default TakeQuiz;