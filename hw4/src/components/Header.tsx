import React from 'react';
import '../portfolio.css'

const Header: React.FC = () => {
    return (
        <header className="header">
            <nav className="navigation">
                <ul>
                    <li><a href="/#info">About</a></li>
                    <li><a href="/#skills">Skills</a></li>
                    <li><a href="/#projects">Projects</a></li>
                    <li><a href="/#contacts">Contacts</a></li>
                    <li><a href="/comic">Comic</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
