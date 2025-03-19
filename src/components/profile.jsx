import React from 'react'
import {  Link } from 'react-router-dom';
export default function Profile({isOpen}) {
  return (
    <div className={isOpen ? "profile" : "closed"}>
    <div className="profilePic">
      <div className="buttons">
        <button>
          <img src="./assets/images/14.png" alt="" />
        </button>
        <button>
          <img src="./assets/images/15.png" alt="" />
        </button>
      </div>
      <div className="pic">
        <img src="./assets/images/User.png" alt="" />
      </div>
      <h2>Hello Alfred Bryant</h2>
      <p>adrain.nader@yahoo.com</p>
      <table>
      <tbody>
        <tr>
         
          <td>
            <img src="./assets/images/16.png" alt="" />
   <Link to="/"> <p>Dashboard</p></Link>
          </td>
          <td>
            <img src="./assets/images/17.png" alt="" />
            <p>Notes</p>
          </td>
        </tr>
        <tr>
          <td>
            <img src="./assets/images/17.png" alt="" />
            <p>Tasks</p>
          </td>
          <td>
            <img src="./assets/images/18.png" alt="" />
            <p>Files</p>
          </td>
        </tr>
        <tr>
          <td>
            <img src="./assets/images/19.png" alt="" />
            <p>Emails</p>
          </td>
          <td>
            <img src="./assets/images/20.png" alt="" />
            <p>Clients</p>
          </td>
        </tr>
        <tr>
          <td>
            <img src="./assets/images/21.png" alt="" />
           <Link to="calendar"> <p>Calendars</p></Link>
          </td>
          <td>
            <img src="./assets/images/22.png" alt="" />
            <p>Settings</p>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <div className="socials">
      <img src="./assets/images/23.png" alt="" />
      <img src="./assets/images/24.png" alt="" />
      <img src="./assets/images/25.png" alt="" />
      <img src="./assets/images/26.png" alt="" />
      <img src="./assets/images/27.png" alt="" />
    </div>
  </div>
  )
}
