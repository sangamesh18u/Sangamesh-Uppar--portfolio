import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Preloader.css';

const Preloader = () => {
    return (
        <div className="preloader">
            <motion.div
                className="preloader-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            >
                Sangamesh<span>.</span>
            </motion.div>
            <div className="loader-bar">
                <motion.div
                    className="bar-fill"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                />
            </div>
        </div>
    );
};

export default Preloader;
