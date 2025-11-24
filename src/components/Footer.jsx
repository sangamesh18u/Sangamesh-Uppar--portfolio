import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <h3>Sangamesh Uppar</h3>
                    <p>Developer | Innovator | Tech Enthusiast</p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/sangamesh-uppar-481415332/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/sangamesh18u" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="mailto:upparsangamesh1@gmail.com">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Sangamesh Uppar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
