import React from 'react';
import footerBackground from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer style={{ backgroundImage: `url(${footerBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
            <div className="footer p-10 text-base-content">
                <nav>
                    <h6 className="footer-title">SERVICES</h6>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </nav>
                <nav>
                    <h6 className="footer-title"> ORAL HEALTH</h6>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teath Whitening</a>
                </nav>
                <nav>
                    <h6 className="footer-title">OUR ADDRESS</h6>
                    <a className="link link-hover">New York - 101010 Hudson</a>
                </nav>
            </div>

            <p className='text-center py-10'>Copyright 2022 All Rights Reserved</p>
        </footer>
    );
};

export default Footer;