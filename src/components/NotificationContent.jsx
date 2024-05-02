import React, { useState } from 'react';
import axios from 'axios';
import './NotificationContent.css'; // Import the CSS file

function NotificationContent() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(''); // Add this line

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if either field is empty
        if (!title.trim() || !content.trim()) {
            setError("Both fields must be filled out"); // Set the error message
            return;
        }
        // Handle form submission here
        const result = axios.post("http://localhost:8080/api/notifications/send", { notificationTitle: title, notificationContent: content });

    console.log(result);
        setTitle(''); // Clear the title field
        setContent(''); // Clear the content field
        console.log('Title:', title);
        console.log('Content:', content);
        setError(''); // Clear the error message
    };

    return (
        <div className="center"> {/* Add the CSS class here */}
            <h1>Create Notification</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex-column">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>

                {error && <p>{error}</p>} {/* Display the error message */}

                <button type="submit" >Submit</button>
            </form>
        </div>
    );
}

export default NotificationContent;