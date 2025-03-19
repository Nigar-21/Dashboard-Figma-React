import React from 'react'
import { Link } from "react-router-dom";

export default function contentHeader() {
  return (
    <>
    <div className="contentHeader">
    <div className="links">
      <span>
        <img src="./assets/images/1.svg" alt="" /> <Link to="/" >List Tasks</Link> 
      </span>
      <span> <img src="./assets/images/2.svg" alt="" /><Link to="/" >Boards</Link> </span>
      <span> <img src="./assets/images/3.svg" alt="" /><Link to="calendar" >Calendar</Link>  </span>
</div>
    <div className="search">
      <img src="./assets/images/7.svg" alt="" />
      <input type="text" placeholder="Search Tasks" />
    </div>
  </div>
  </>

  )
}
