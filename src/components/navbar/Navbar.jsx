import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <nav>
            <div className='for_pc'>
                <ul className='list_cont'>
                    <li>Logo</li>
                    <div className='navigation_cotn'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Upcoming Projects</li>
                        <li>About Me</li>
                        <li className='contact_me'>Contact Me</li>
                    </div>
                </ul>
            </div>
            <div className='for_mobile'>
                <div className='for_mobile_cont'>
                    <ul className='list_cont_mobile'>
                        <li>Logo</li>
                        <li 
                            className="material-symbols-outlined menu_icon" 
                            onClick={toggleSidebar}
                        >
                            menu
                        </li>
                    </ul>
                </div>
            </div>

            {isSidebarOpen && (
                <div className='sidebar_cont'>
                    <div className='sidebar_hai'>
                        <button className='close_button' onClick={closeSidebar}>X</button>
                        <ul>
                            <li>Home</li>
                            <li>Services</li>
                            <li>Upcoming Projects</li>
                            <li>About Me</li>
                            <li>Contact Me</li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
