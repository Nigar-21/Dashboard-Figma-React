
import React from 'react';
import { Calendar } from 'antd';
  
export default function calendar({onPanelChange}) {
  return (
<div className='calendar'>
<div className="header">
      <div className="links">
        <a href="">
          <img src="./assets/images/1.svg" alt="" /> List Tasks
        </a>
        <a href=""> <img src="./assets/images/2.svg" alt="" /> Boards </a>
        <a href=""> <img src="./assets/images/3.svg" alt="" /> Calendar </a>
        <a href=""> <img src="./assets/images/4.svg" alt="" /> Gantt </a>
        <a href=""> <img src="./assets/images/5.svg" alt="" /> Timeline </a>
        <a href=""> <img src="./assets/images/6.svg" alt="" /> Activity </a>
      </div>
      <div className="search">
        <img src="./assets/images/7.svg" alt="" />
        <input type="text" placeholder="Search Tasks" />
      </div>
    </div>
    <Calendar/>
</div>
  )
}
