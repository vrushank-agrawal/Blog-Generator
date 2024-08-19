import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from "../styles/blogStyle";

const BlogPost = ({ posts }) => {
    return (
        <div>
            {posts.map((post) => (
                <div style={styles.container} key={post._id}>
                    <div style={styles.textContainer}> {/* Rounded box around the text */}
                        <div style={styles.title}>{post.title}</div>
                        <div style={styles.text}>{post.content}</div>
                    </div>
                    <div style={styles.buttonContainer}>
                        <div style={styles.date}>
                            Created on {new Date(post.createdAt).toUTCString()}
                        </div>
                        <div style={{ ...styles.icon, marginLeft: 'auto' }}>
                            <button type="submit" style={styles.button}>
                                <FaTrashAlt />
                                <span style={styles.iconText}>Delete Post</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogPost;