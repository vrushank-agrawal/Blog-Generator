import React from 'react';
import styles from '../styles/promptStyle';

const Prompt = () => {
    return (
    <div style={styles.container}>
        <input type="text" style={styles.inputText} placeholder="Enter topic..." />
        <button style={styles.button}>Generate Blog Post</button>
    </div>
    );
};

export default Prompt;