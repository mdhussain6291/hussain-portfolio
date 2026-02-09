import React from 'react';
import './footer.css';
import { FaLinkedin, FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>Md Hussain</h2>
                <p>Full Stack Developer | BTech CSE Graduate</p>

                <div className="footer-socials">
                    <a href="https://www.linkedin.com/in/md-hussain-13ba04328/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>

                    <a href="mailto:mdhussain6291@gmail.com">
                        <FaEnvelope />
                    </a>

                    <a href="https://www.instagram.com/hussain.noirl_/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>

                    <a href="https://wa.me/6291187834" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </a>

                </div>

                <p className="footer-copy">© {new Date().getFullYear()} Md Hussain. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
