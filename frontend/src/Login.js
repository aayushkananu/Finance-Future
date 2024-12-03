import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const styles = {
        container: {
            backgroundColor: '#121212', // Black (Base)
            color: '#FFFFFF', // White (Contrast)
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px'
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            width: '300px'
        },
        input: {
            margin: '10px 0',
            padding: '10px',
            borderRadius: '5px',
            border: `1px solid #B0BEC5`, // Gray (Neutral) for borders
            backgroundColor: '#121212', // Black (Base)
            color: '#FFFFFF', // White (Contrast)
        },
        button: {
            backgroundColor: '#4CAF50', // Green (Accent)
            color: '#FFFFFF', // White (Contrast)
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            marginTop: '10px'
        },
        label: {
            color: '#E8F5E9', // Soft Green for a subtle hint
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login/', {
                username: username,
                password: password
            });
            console.log('Login successful:', response.data);
            // Handle login success (e.g., storing the token, redirecting to dashboard)
        } catch (error) {
            console.error('Login failed:', error);
            // Handle errors (e.g., showing an error message)
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label style={styles.label}>Username</label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} style={styles.input} />

                <label style={styles.label}>Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} style={styles.input} />

                <button type="submit" style={styles.button}>Login</button>
            </form>
        </div>
    );
}

export default Login;
