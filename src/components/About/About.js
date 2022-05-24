import First from '../First/First';
 import about from "./About.module.css"
 import {Container} from "react-bootstrap"
const About = () => {
    return ( 
        <>
        <First/>
        
        
        
      <div className={about.about}>
         <div className={about.comment}>
         <div className={about.comment1}>
             <h1>Quizzy comes with amazing</h1>
             <h1>features like</h1>
         </div>
         <div className={about.comment2}>
             <div className={about.computer}>
             <img src="images/Vector1.png" alt="" />
                 <p>Taking exams with your devices</p>
                 <p>easily</p>
             </div>
             <div className={about.book}>
             <img src="images/Vector2.png" alt="" />
                 <p>Plenty of Tests to help you prepare </p>
                 <p>for your exams</p>
             </div>
             <div className={about.network}>
             <img src="images/Vector3.png" alt="" />
                 <p>Detailed statistics showing your</p>
                 <p>progress across your tests</p>

                
             </div>
         </div>
     </div>
     <div className={about.customer}>
         <div className={about.customer1}>
             <h1>What our clients say</h1>
             <p>see what our customer say about us. It really matter for us. How good or bad</p>
             <p>We will make it for evaluation to make Quizzy better.</p>
         </div>
         <div className={about.customer2}>
             <div className="one"><p> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Necessitatibus magnam qui totam natus. Eum porro <br></br>hic temporibus ut laudantium, sunt recusandae nam <br></br>incidunt rem aperiam, tempora, repellat commodi<br></br> inventore quia!</p></div>
             <div className="two"><p> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Necessitatibus magnam qui totam natus. Eum porro <br></br>hic temporibus ut laudantium, sunt recusandae nam <br></br>incidunt rem aperiam, tempora, repellat commodi<br></br> inventore quia!</p></div>
             <div className="three"><p> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Necessitatibus magnam qui totam natus. Eum porro <br></br>hic temporibus ut laudantium, sunt recusandae nam <br></br>incidunt rem aperiam, tempora, repellat commodi<br></br> inventore quia!</p></div>
         </div>
     </div>
        <footer style={{backgroundColor:"rgb(46, 46, 78)"}}>
            <Container className='px-4 text-white text-center'>
                <h6>Need Help? <span style={{color:'blue'}}>Click Here</span> </h6>
                <h2>Copyright Quizzy 2022</h2>
                <button style={{backgroundColor:"transparent",border:"1px solid black"}}>Terms&Conditions</button>
            </Container>
        </footer>
    
     </div> 
    </>
    
     );
}
 
export default About;