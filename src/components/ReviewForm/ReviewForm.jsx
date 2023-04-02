import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

function ReviewForm () {
    const dispatch = useDispatch();
    const history = useHistory();

    const feedback = useSelector(store => ({
        feeling: store.feeling,
        understanding: store.understanding,
        support: store.support,
        comments: store.comments,
    }));
    console.log('Feedback', feedback);

    // check if all feedback have been completed
    const isComplete = 
    feedback.feeling !== '' && 
    feedback.understanding !== '' &&
    feedback.support !== '' && 
    feedback.comments !=='';

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitting feedback ', feedback);
    // 'POST' data to the database
    axios.post('/api/feedback', feedback)
        .then((response) => {
            console.log('Feedback saved successfully', response);
            dispatch({
            type: 'ADD_FEEDBACK',
            payload: feedback,
         });
         history.push('/thankyou')
        })
        .catch((error) => {
            console.log('Error saving feedback', error);
        });
       
    };
    return (
        <div>
            <h2>Review Your Feedback</h2>
            <form onSubmit = {handleSubmit}>
                <p>Feeling: {feedback.feeling}</p>
                <p>Understanding: {feedback.understanding}</p>
                <p>Support: {feedback.support}</p>
                <p>Comments:{feedback.comments}</p>
                {isComplete ? (
                    <button type="submit">Submit</button>
                ) :  (
                    <button type="submit" disabled>Incomplete</button>
                )}
            </form>
        </div>
    );

}

export default ReviewForm;