import {Link} from "react-router-dom";
import pie from './AdminPage.module.css';
import Sidebar from "../Sidebar/Sidebar";
import PieNav from "../PieNav/PieNav";
import {ResponsiveContainer, LineChart,  XAxis, YAxis, CartesianGrid, Tooltip} from "recharts"
import  {PieChart}  from 'react-minimal-pie-chart';
const pdata = [
    {
        name:"1st quiz",
       progress:"0"
    },
    {
        name:"2st quiz",
       progress:"20"
    },
    {
        name:"3st quiz",
       progress:"40"
    },
    {
        name:"4st quiz",
       progress:"60"
    },
    {
        name:"5st quiz",
       progress:"80"
    },
    {
        name:"6st quiz",
       progress:"100"
    },
    {
        name:"7st quiz",
       progress:"120"
    },
    {
        name:"8st quiz",
       progress:"140"
    },
    {
        name:"9st quiz",
       progress:"160"
    },
];
const AdminPage = () => {
    return ( 
        <>
        <Sidebar/>
        <PieNav/>
        <div className={pie.Piechart}>
            <div className={pie.Firstpie}>
                <div className={pie.sin}>
                        <h2>Hello Name!</h2>
                        <p>View your score and accuracy here</p>
                        <h4>Click here to take quiz</h4>
                        <Link to="/TakeQuiz"><button>Take Quiz</button></Link>  
                </div>
                <div className={pie.chart}>
                <PieChart
                data={[
                    { title: 'Failed', value: 10, color: 'Red' },
                    { title: 'Passed', value: 20, color: 'rgb(72, 72, 235)' }
                ]}
                />;
                </div> 
            </div>
            <div className={pie.secondpie}>
                <div className={pie.bub}>
                    <div>
                        <p1>Progress</p1>
                        <p>Keep track of your last 9 quizzes and see your progress</p>
                    </div>
                    <div>
                        <input type="radio" name='radio'/>
                        <label htmlFor="">Bar chart</label>
                    </div>
                </div>
               
                    <ResponsiveContainer width="100%" aspect={3.5}>
                    <LineChart data={pdata} width={500} height={5}>
                    <CartesianGrid strokeDasharray="1 1"/>
                    <XAxis dataKey="name" interval={'preserveStartEnd'}/>
                    <YAxis  dataKey="progress"/>
                    <Tooltip/>
                    </LineChart>
                    </ResponsiveContainer>
               
            </div>
        </div>
        </>
     );
}
export default AdminPage;