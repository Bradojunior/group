import First from '../First/First';
import  help from './Help.module.scss';
const Help = () => {
    return (
        <>
         <First/>
            <div className={help.Help} >
                <div className={help.Image} class="d-flex">
                    <div className={help.People}>
                        <img src="./images/people.png" alt="" />
                        <h1>Welcome To Quizzy</h1>
                        <h3>What can we help you with?</h3>
                    </div>
                    <div className={help.Input}>
                        <label>Category</label>
                        <select id="dropdown">   
                            <option>Category</option>
                            <option>Quiz</option>
                            <option>Account</option>
                            <option>Feedback</option>
                        </select><br />
                        <div className={help.class}>
                        <label htmlFor="">Subject</label>
                        <input type="text" placeholder='Subject'/><br />
                        <label htmlFor="">Email</label>
                        <input  type="text" placeholder='Email'/>
                        </div>
                        <div className={help.placeholder}>
                        <label htmlFor="">Description of Problem</label><br />
                        <textarea name="textarea" id="textarea" cols="10" rows="5">Tell us more about your problem</textarea>
                        <p>Briefly describe the situation our surport team will get back to you as soon as possible</p>
                        <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Help;