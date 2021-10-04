
import React from 'react';
import'./Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            
            <div class="footer-nav">
                <a href="/Home">Home</a>
                <a href="/Service">Service</a>
                <a href="/About">About</a>
                <a href="/">Contact</a>
            </div>
            <div >
            <p>&copy;2021 Made By Faysal Mohammed Shah</p>
            </div>
        </div>
    );
};

export default Footer;