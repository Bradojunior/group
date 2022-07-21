
import {MdOutlineDashboardCustomize, MdQuiz} from "react-icons/md"
import {GiBookmarklet} from "react-icons/gi"
import {FiSettings} from "react-icons/fi"
import {FaHireAHelper} from "react-icons/fa"
import {AiTwotoneMail} from "react-icons/ai"
export const SidebarData = [
    {
        title:"Dashboard",
        icon:<MdOutlineDashboardCustomize size={50}/>,
        link:"/OrgPage"
    },
    {
        title:"Create quiz",
        icon:<MdQuiz size={50}/>,
        link:"/CreateQuiz"
    },
    {
        title:"Send Mail",
        icon:<AiTwotoneMail size={50}/>,
        link:"/SendMail"
    },
    
   
    
    {
        title:"Help",
        icon:<FaHireAHelper size={45}/>,
        link:"/OrgHelp"
    },
];
  
