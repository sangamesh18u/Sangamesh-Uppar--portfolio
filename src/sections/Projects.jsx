import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import nexlincImg from '../assets/nexlinc.jpg';
import prashikshanImg from '../assets/prashikshan.png';
import scrapingAgentImg from '../assets/scraping_agent.jpg';
import ragAgentImg from '../assets/rag_agent.jpg';
import '../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'NexLinc',
            description: 'Student-focused platform connecting colleges and students through events, community, and opportunities.',
            techStack: ['React', 'Node.js', 'MongoDB'],
            image: nexlincImg,
            link: 'https://github.com/sangamesh18u', // Default to profile if no specific link
        },
        {
            title: 'Prashikshan',
            description: 'NEP-based internship accessibility and academia-industry interface solution.',
            techStack: ['MERN Stack', 'Tailwind CSS'],
            image: prashikshanImg,
            link: 'https://github.com/sangamesh18u',
        },
        {
            title: 'Data Scraping Agent',
            description: 'Automated LinkedIn data extractor for job and profile insights.',
            techStack: ['Python', 'Selenium', 'BeautifulSoup'],
            image: scrapingAgentImg,
            link: 'https://github.com/sangamesh18u',
        },
        {
            title: 'RAG Agent',
            description: 'AI-powered retrieval-augmented generation system for smart knowledge responses.',
            techStack: ['Python', 'LangChain', 'OpenAI'],
            image: ragAgentImg,
            link: 'https://github.com/sangamesh18u',
        },
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container projects-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Featured Projects
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <FaGithub /> View Code
                                    </a>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tech">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
