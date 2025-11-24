import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import profileImg from '../assets/profile.jpg';
import ParticleBackground from '../components/ParticleBackground';

import '../styles/Hero.css';

const Hero = () => {
    const [text, setText] = React.useState('');
    const fullText = "Computer Science Student | Web Developer | Automation & AI/ML Enthusiast";
    const [index, setIndex] = React.useState(0);
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText(prev => prev + fullText.charAt(index));
                setIndex(prev => prev + 1);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        setMousePosition({
            x: (clientX - centerX) / 50, // Adjust divisor for sensitivity
            y: (clientY - centerY) / 50
        });
    };

    return (
        <section id="hero" className="hero-section" onMouseMove={handleMouseMove}>
            <ParticleBackground />
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, x: mousePosition.x * -1, y: mousePosition.y * -1 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 30 }}
                >
                    <h2 className="hero-greeting">Hello, I'm</h2>
                    <h1 className="hero-name">Sangamesh Uppar</h1>
                    <h3 className="hero-role">
                        {text}
                        <span className="cursor">|</span>
                    </h3>
                    <p className="hero-bio">
                        Hi, I’m Sangamesh Uppar — a passionate tech enthusiast specializing in Web Development, Automation, and AI/ML. I build innovative, scalable, and intelligent digital solutions.
                    </p>
                    <p className="hero-tagline">Developer | Innovator | Tech Enthusiast</p>

                    <div className="hero-buttons">
                        <Link to="projects" smooth={true} duration={500} offset={-70} className="btn btn-primary">
                            View Projects
                        </Link>
                        <a href="/resume.pdf" download className="btn btn-outline">
                            Download Resume
                        </a>
                        <Link to="contact" smooth={true} duration={500} offset={-70} className="btn btn-outline">
                            Contact Me
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, x: mousePosition.x, y: mousePosition.y }}
                    transition={{ type: 'spring', stiffness: 100, damping: 30 }}
                >
                    <div className="image-wrapper">
                        <img src={profileImg} alt="Sangamesh Uppar" className="profile-img" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
