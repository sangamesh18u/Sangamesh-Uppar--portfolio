import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container about-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h2>

                <div className="about-content">
                    <motion.div
                        className="about-image"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="img-box">
                            <img src={profileImg} alt="Sangamesh Uppar" className="about-profile-img" />
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p>
                            I’m a 2nd-year B.Tech Computer Science student at VTU, Belgaum, with a deep passion for Web Development, Automation, and AI/ML. I love transforming ideas into impactful products that simplify real-world challenges.
                        </p>
                        <p>
                            I’ve built and contributed to multiple projects such as NexLinc, Prashikshan, Data Scraping Agent, and RAG Agent. My goal is to continuously grow, innovate, and build intelligent, user-focused products that make a difference.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
