import React, { useState } from 'react';
import axios from 'axios';

const AdminNotificationForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [notificationSent, setNotificationSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/notifications/send', { title, content })
            .then(response => {
                if (response.status === 201) {
                    console.log('Notification sent successfully');
                    setNotificationSent(true);
                } else {
                    console.error('Failed to send notification');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const resetForm = () => {
        setTitle('');
        setContent('');
        setNotificationSent(false);
    };

    if (notificationSent) {
        return (
            <div style={styles.notificationSentContainer}>
                <p>Notification sent successfully!</p>
                <button style={styles.button} onClick={resetForm}>Write Another Notification</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Notification Title" style={styles.input} />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Notification Content" style={styles.textarea} />
            <button type="submit" style={styles.button}>Send Notification</button>
        </form>
    );
};

const styles = {
    form: {
        marginBottom: 20,
    },
    input: {
        marginBottom: 10,
        padding: 10,
        width: '100%',
        borderRadius: 5,
        border: '1px solid #ccc',
    },
    textarea: {
        marginBottom: 10,
        padding: 10,
        width: '100%',
        minHeight: 100,
        borderRadius: 5,
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px 20px',
        borderRadius: 5,
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
    },
    notificationSentContainer: {
        marginBottom: 20,
        backgroundColor: '#d4edda',
        color: '#155724',
        padding: 10,
        borderRadius: 5,
    },
};

export default AdminNotificationForm;
