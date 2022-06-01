import {MdDashboard} from "react-icons/md";
import {MdQuiz} from "react-icons/md";
import {HiOutlineBookOpen}  from "react-icons/hi";
import {CgProfile} from "react-icons/cg";
import {GoItalic} from "react-icons/go"

export const SidebarData = [
    {
        title:"Dashboard",
        icon:<MdDashboard size={40}/>,
        link:"/AdminPage"
    },
    {
        title:"Take quiz",
        icon:<MdQuiz size={40}/>,
        link:"/TakeQuiz"
    },
    {
        title:"Test Yourself",
        icon:<HiOutlineBookOpen size={40}/>,
        link:"/TestYourSelf"
    },
    {
        title:"Edit Profile",
        icon:<CgProfile size={40}/>,
        link:"/Username"
    },
    {
        title:"Help",
        icon:<GoItalic size={40}/>,
        link:"/Problem"
    },
];
  
