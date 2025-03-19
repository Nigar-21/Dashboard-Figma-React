import { useState } from "react";

const Header = ({ isOpen, toggleSidebar }) => {
 
    return (
        <header>
            <div className="left">
                <button onClick={toggleSidebar}>
                    <img src="./assets/images/Icon.png" alt="" />
                </button>
                <h2>Constructor</h2>
            </div>
            <div className="menu">
                <a href="">Dashboard</a>
                <a href="">About Us</a>
                <a href="">News</a>
                <a href="">User Policy</a>
                <a href="">Contacts</a>
                <button>
                    <img src="./assets/images/1.png" alt="" />
                </button>
            </div>
            <div className="search-line">
                <img src="./assets/images/2.png" alt="" />
                <input type="text" placeholder="Search Products,Orders and Clients" />
                <img src="./assets/images/3.png" alt="" />
            </div>
            <div className="right">
                <img src="./assets/images/4.png" alt="" />
                <p>Clayton Santos</p>
                <div className="buttons">
                    <button>
                        <img src="./assets/images/5.png" alt="" />
                    </button>
                    <button>
                        <img src="./assets/images/6.png" alt="" />
                    </button>
                </div>
            </div>
        </header>

    )
}

export default Header;