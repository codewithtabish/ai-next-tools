import React from 'react';

const BlogsAd = () => {
  return (
    <div style={styles.container}>
      <div style={styles.ad}>
        <h2 style={styles.adTitle}>Sponsored Ad</h2>
        <p style={styles.adContent}>
          Discover the latest tools and technologies in web development. Upgrade your skills with our expert-curated courses!
        </p>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer" style={styles.adLink}>
          Learn More
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    margin: '20px 0',
  },
  ad: {
    maxWidth: '300px',
    textAlign: 'center',
    padding: '15px',
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  adTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0 0 10px',
    color: '#333',
  },
  adContent: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '10px',
  },
  adLink: {
    fontSize: '14px',
    color: '#007BFF',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default BlogsAd;
