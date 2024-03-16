import clss from './navbar.module.css'
import { MdOutlineLocalMovies } from "react-icons/md";

const navbar = () => {

    return(
       <div className={clss.navbar}>
          <div className={clss.logo}>  <MdOutlineLocalMovies color='yellow' /><h1>MovieOS</h1> </div>  
            <ul>
                <li>List</li>
                <li>Fav</li>
                <li>Watched</li>
            </ul>
       </div>
    );

}

export default navbar;