import { Link } from "react-router-dom"

export default Navigation=()=> {
 return(  <nav>  
    <Link to="/">
      <button>Home</button>
    </Link>
    <Link to="/About">
      <button>About</button>
    </Link>
    <Link to="/StarWarsList">
      <button>Star Wars List</button>
    </Link>
   </nav>
)}