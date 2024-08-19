import React from 'react';
import styles from '../styles/headerStyle';

const Header = () => {
    return (
    <div style={styles.container}>
        <h1 style={styles.title}>Blog Post Generator with Gemini</h1>
    </div>
    );
};

export default Header;