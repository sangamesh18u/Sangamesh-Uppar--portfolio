import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // NOTE: You need to create an account at https://www.emailjs.com/
        // and replace these placeholders with your actual Service ID, Template ID, and Public Key.
        // 1. Service ID: Create a new service (e.g., Gmail)
        // 2. Template ID: Create a new email template
        // 3. Public Key: Found in Account > API Keys

        emailjs.sendForm(
            'service_i93k8si',     // Replace with your Service ID
            'template_8w535oz',    // Replace with your Template ID
            form.current,
            'adTcJCiZoIzeoEBdB'      // Replace with your Public Key
        )
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                alert('Failed to send message. Have you replaced the "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", and "YOUR_PUBLIC_KEY" placeholders in Contact.jsx with your actual EmailJS credentials?');
            });
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Get In Touch
                </motion.h2>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3>Let's Connect</h3>
                        <p>
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <FaEnvelope className="icon" />
                                <span>upparsangamesh1@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <FaLinkedin className="icon" />
                                <a href="https://www.linkedin.com/in/sangamesh-uppar-481415332/" target="_blank" rel="noopener noreferrer">
                                    LinkedIn Profile
                                </a>
                            </div>
                            <div className="contact-item">
                                <FaGithub className="icon" />
                                <a href="https://github.com/sangamesh18u" target="_blank" rel="noopener noreferrer">
                                    GitHub Profile
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        ref={form}
                        className="contact-form"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        onSubmit={handleSubmit}
                    >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
