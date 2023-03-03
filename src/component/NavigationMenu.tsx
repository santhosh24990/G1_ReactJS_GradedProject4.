import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { NavLink } from "react-router-dom";
import "./style/NavigationMenu.css"
import { BiMenu } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useState } from "react";


// Here props and call back is used for sending serached value from child to parent


type Props={
    callback:(x:string)=>void
}

const NavigationMenu = (prop:Props) => {
   
   const[menu,setmenu]=useState<boolean>(false)

    const handlecallback=(set:string)=>
    {
       prop.callback(set)
    }

    const showhandler=()=>{
      setmenu(true)
    }
    const hidehandler=()=>{
      setmenu(false)
    }

    const classname=`navbar  ${menu===true?"showmenu":"hidemenu"}`
 
    return ( 
   <div className="header">
     <div className="navigation">
     <h3><a className="home" href="/theatres">Imovies</a></h3>
     <ul className={classname}>
        <li> <NavLink className="links" to="/theatres">In Theatres</NavLink> </li>
        <li> <NavLink className="links" to="/soon">Coming soon</NavLink> </li>
        <li> <NavLink className="links" to="/best">Top Rated</NavLink> </li>
        <li> <NavLink className="links" to="/india">Top Rated indian</NavLink> </li>
        <li> <NavLink className="links" to="/fav">Favourites</NavLink> </li>
        <div className="close"> <AiOutlineCloseCircle onClick={hidehandler} size={25} color="white" /> </div>
     </ul>
     <div className="icon" >< BiMenu onClick={showhandler} size={50} color="white" /></div>
     </div>
     <input className="search" onChange={(e)=>{
      handlecallback(e.target.value)
   }} placeholder="search" />
  </div> );
}
 
export default NavigationMenu;