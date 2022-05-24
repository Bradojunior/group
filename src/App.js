import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Signup2 from './components/Signup2/Signup2';
import Signup3 from './components/Signup3/Signup3';
import LandingPage from './components/LandingPage/LandingPage';
import PieChartPage from './components/PieChartPage/PieChartPage';
import TakeQuiz from './components/TakeQuiz/TakeQuiz';
import QuizInstruct from "./components/QuizInstruct/QuizInstruct";
import TestYourSelf from "./components/TestYourSelf/TestYourSelf"
import Recorder from './components/Recorder/Recorder';
import QuizComplete from './components/QuizComplete/QuizComplete';
import QuizComplete1 from './components/QuizComplete1/QuizComplete1';
import Username from './components/Username/Username';
import Problem from './components/Problem/Problem';


function App() {
  return (
    <Router>
    <div className='Apps'>
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Signup2' element={<Signup2/>}/>
        <Route path='/Signup3' element={<Signup3/>}/>
        <Route path='/LandingPage' element={<LandingPage/>}/>
        <Route path='/PieChartPage' element={<PieChartPage/>}/>
        <Route path='/TakeQuiz' element={<TakeQuiz/>}/>
        <Route path='/QuizInstruct' element={<QuizInstruct/>}/>
        <Route path='/TestYourSelf' element={<TestYourSelf/>}/>
        <Route path='/Recorder' element={<Recorder/>}/>
        <Route path='/QuizComplete' element={<QuizComplete/>}/>
        <Route path='/QuizComplete1' element={<QuizComplete1/>}/>
        <Route path='/Problem' element={<Problem/>}/>
        <Route path='/Username' element={<Username/>}/>

      </Routes>
    
      </div>
      </Router>

  );
}

export default App;
