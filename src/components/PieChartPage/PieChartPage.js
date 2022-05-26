import {Link} from "react-router-dom";
import pie from './PieChartPage.module.css';
import Sidebar from "../Sidebar/Sidebar";
import PieNav from "../PieNav/PieNav";
import {ResponsiveContainer, LineChart,  XAxis, YAxis, CartesianGrid, Tooltip,PieChart, Pie, Sector, Cell  } from "recharts"
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
// const data = [
//     { name: 'Group A', value: 400 },
//     { name: 'Group B', value: 300 },
//     { name: 'Group C', value: 300 },
//     { name: 'Group D', value: 200 },
//   ];
//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  


  
const PieChartPage = () => {
    return ( 
        <>
        <Sidebar/>
        <PieNav/>
        <div className={pie.Piechart}>
            <div className={pie.Firstpie}>
                <div className={pie.sin}>
                    <div className={pie.firstpie1}>
                        <h2>Hello Name!</h2>
                        <p>Welcome to your Dashboard.<br/>You can check your progress and accuracy here.</p>
                        <h4>Click here to take quiz</h4>
                        <Link to="/TakeQuiz"><button>Take Quiz</button></Link>
                    </div>
                    <div className={pie.imag}>
                        <img src="images/sin.png" alt=""/>
                    </div>
                </div>
                {/* <PieChart width={800} height={400} >
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        ></Pie>
        </PieChart> */}
            </div>
            <div className={pie.secondpie}>
                <div className={pie.bub}>
                    <div>
                        <h2>Progress</h2>
                        <p>Keep track of your last 9 quizzes and see your progress</p>
                    </div>
                    <div>
                        <input type="radio" name='radio'/>
                        <label htmlFor="">Bar chart</label>
                    </div>
                </div>
               
                    <ResponsiveContainer width="100%" aspect={3.5}>
                    <LineChart data={pdata} width={500} height={30}>
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
 
export default PieChartPage;