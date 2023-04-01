import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

function ReviewForm () {
    const dispatch = useDispatch();
    const history = useHistory();

    const feedback = useSelector(store => ({
        feelingInfo: store.feelingInfo,
        understandingInfo: store.understandingInfo,
        supportInfo: store.supportInfo,
    }));
    console.log('This is the review form', ReviewForm);
    // check if all feedback have been completed
    const isComplete = feedback.feelings !== '' && feedback.understanding !== '' && feedback.support !== '';

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Feedback', feedback);

        dispatch({
            type: 'ADD_FEEDBACK',
            payload: feedback,
        });
        history.push('/')

    };
    return (
        <div>
            <h2>Review Your Feedback</h2>
            <form onSubmit = {handleSubmit}>
                <p>Feeling: {feedback.feelingInfo}</p>
                <p>Understanding: {feedback.understandingInfo}</p>
                <p>Support: {feedback.supportInfo}</p>
                <p>Comments:{feedback.commentsInfo}</p>

                <button disabled={!isComplete}>Submit</button>
            </form>
        </div>
    );

}

export default ReviewForm;