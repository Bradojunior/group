import sid from'./Sidebar.module.css';
import {NavLink, Link} from "react-router-dom";
import { SidebarData } from './SidebarData';
const Sidebar = () => {
    return ( 
        <>
        <div className={sid.Sidebar}>
            <img src="images/logo.png" alt="" />
              <ul className={sid.SidebarList}>
           {SidebarData.map((val, key)=>{
               return(
                   <Link to={val.link}>
                   <li key={key}
                className={sid.row}
                >
                   <div id='icon' className={sid.icon}>{val.icon}</div>
                   <div id='title' className={sid.title}>
                       {val.title}
                   </div>
                   </li>
                   </Link>
               );
           })}
           </ul>
        </div>
        </>
     );
}
 
export default Sidebar;