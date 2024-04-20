import React from 'react';
import Button from './Button';


function Nav() {
    return (
        <div className="header-container">
            <div className="logo-container">
                <a href="#" className="logo">
                    <span className="logo-design">Housing</span>
                    <span className="address-code">07 9543 768</span>
                </a>
            </div>
            <nav>
                <ul className="navigation-menu">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Gallery</a>
                    </li>
                    <li>
                        <a href="#">Location</a>
                    </li>
                    <li>
                        <a href="#">Project updates</a>
                    </li>
                </ul>
                <Button
                link='Register your interest'
                 />
            </nav>
        </div>
    );
}

export default Nav;