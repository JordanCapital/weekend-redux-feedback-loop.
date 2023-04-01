import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
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


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Review', review);

    };
    return (
        <div>
            <h2>Review Your Feedback</h2>
            <form onSubmit = {handleSubmit}>
                <p>Feeling: {ReviewForm.feelings}</p>
                <p>Understanding: {ReviewForm.understanding}</p>
                <p>Support: {ReviewForm.support}</p>
                <p>Comments:{ReviewForm.comments}</p>
                {formComplete ? (
                    <button type="submit">Submit Feedback</button>
                ) : (
                    <button type="submit" disabled>
                    Submit Feedback
                    </button>
                )}
            </form>
        </div>
    );

}

export default ReviewForm;