import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Survey() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios.get('/api/questions/')  // Adjust this URL based on your Django API endpoint
            .then(response => {
                setQuestions(response.data);
            })
            .catch(error => console.error('Error fetching questions:', error));
    }, []);

    return (
        <div>
            {questions.map(question => (
                <div key={question.id}>
                    <h2>{question.text}</h2>
                    {/* You can add a form here to handle responses */}
                </div>
            ))}
        </div>
    );
}

export default Survey;
