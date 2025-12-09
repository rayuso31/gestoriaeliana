import React from 'react';
import { motion } from 'framer-motion';

export const Reveal = ({ children, delay = 0, width = "fit-content" }) => {
    return (
        <div style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: delay }}
                viewport={{ once: true }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export const FadeIn = ({ children, delay = 0, className = "" }) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
};
