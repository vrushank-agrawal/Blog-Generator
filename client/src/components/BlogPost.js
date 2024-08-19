import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from "../styles/blogStyle";

const BlogPost = ({ posts, onDelete }) => {
    return (
        <div>
            {posts.length === 0 ? (
                <div style={styles.error}>No posts found.</div>
            ) : (
                posts.map((post) => (
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
                                <form onSubmit={(e) => onDelete(e, post._id)}>
                                    <button type="submit" style={styles.button}>
                                        <FaTrashAlt />
                                        <span style={styles.iconText}>Delete Post</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default BlogPost;