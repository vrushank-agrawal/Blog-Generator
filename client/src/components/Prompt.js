import React, { useState } from 'react';
import styles from '../styles/promptStyle';

const Prompt = ({ onSubmit }) => {
    const [topic, setTopic] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(topic);
        setTopic('');
    }

    return (
    <div style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.form}>
            <input
                type="text"
                style={styles.inputText}
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Enter topic..."
            />
            <button type="submit" style={styles.button}>Generate Blog Post</button>
        </form>
    </div>
    );
};

export default Prompt;