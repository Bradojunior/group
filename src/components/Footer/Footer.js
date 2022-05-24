import fot from "./Footer.module.css"
const Footer = () => {
    return ( 
        <div className={fot.footer}>
        <div className={fot.wrap}>
        <div className={fot.footer1}>
            <h1>Copyright</h1>
        </div>
        <div className={fot.footer2}>
        <img src="images/Vector4.png" alt="" />
        </div>
        <div className={fot.footer3}>
            <h1>Quizzy 2023</h1>
        </div>
        </div>
        <button>Terms&Privacy </button>

    </div>
     );
}
 
export default Footer;