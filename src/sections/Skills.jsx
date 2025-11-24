import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaRobot, FaBrain } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {
    const skills = [
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
        { name: 'Automation', icon: <FaRobot />, color: '#FF6F61' },
        { name: 'AI/ML', icon: <FaBrain />, color: '#9B59B6' },
    ];

    return (
        <section id="skills" className="section skills-section">
            <div className="container skills-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    My Skills
                </motion.h2>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="skill-icon" style={{ color: skill.color }}>
                                {skill.icon}
                            </div>
                            <h3 className="skill-name">{skill.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
