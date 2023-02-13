import React, { useState} from "react";
import { Link } from "react-router-dom";
import About from "../about/About";
import Home from "../home/Home";
import Login from "../login/Login";
import Register from "../register/Register";
import './navbar.css'

const Navbar = (props)=>{

  const [searchValue, setSearchValue] = useState("")

  const getSearchValue = (event)=>{
    setSearchValue(event.target.value)
  }


  const clear = ()=>{
    setSearchValue("")
  }

  var searchValueReceived = searchValue.length > 0
  
  return (
      <nav>
  <h2>FreelanceNepal</h2>
  <ul>
    {/* This is the navbar route */}
    <li className="navbarItem"><Link to = "/" >Home</Link> </li>
    <li className="navbarItem"><Link to = "/gigs" >Gigs</Link>  </li>
    <li className="navbarItem"><Link to = "/notification" >Notification</Link>  </li>
    {props.loggedIn ?<h2>Logged In</h2> : <li className="navbarItem"><Link to = "/login"  >Login</Link></li>}
    
    <li className="navbarItem"><Link to = "/about" >About</Link>  </li>
    <li className="navbarItem"><Link to = "/profile" >Profile</Link>  </li>
    <input id="searchInput" value = {searchValue} type="text"  onChange={getSearchValue}/> 

     {/*Using the concept of short circuiting  */}
     {searchValueReceived && <button className="clear-btn" onClick={clear}>Del</button>}
  </ul>
</nav>
    )
}

export default Navbar;