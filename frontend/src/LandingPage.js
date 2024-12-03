import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    const styles = {
        container: {
            backgroundColor: '#121212', // Black (Base)
            color: '#FFFFFF', // White (Contrast)
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        header: {
            color: '#4CAF50' // Green (Accent)
        },
        paragraph: {
            marginBottom: '20px'
        },
        link: {
            textDecoration: 'none',
            margin: '0 10px'
        },
        button: {
            backgroundColor: '#4CAF50', // Green (Accent)
            color: '#FFFFFF', // White (Contrast)
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
        },
        buttonHover: {
            backgroundColor: '#E8F5E9', // Soft Green (Background)
            color: '#121212' // Black (Base)
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Welcome to FinanceFuture!</h1>
            <p style={styles.paragraph}>Please log in or register to continue.</p>
            <div>
                <Link to="/login" style={styles.link}>
                    <button style={styles.button} onMouseOver={e => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                            onMouseOut={e => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}>Login</button>
                </Link>
                <Link to="/register" style={styles.link}>
                    <button style={styles.button} onMouseOver={e => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                            onMouseOut={e => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}>Create Profile</button>
                </Link>
            </div>
        </div>
    );
}

export default LandingPage;
