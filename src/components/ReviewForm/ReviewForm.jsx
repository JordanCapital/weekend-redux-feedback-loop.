import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ReviewForm () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [review, setReview] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Review', review);

    };
    return (
        <div>
            <h2>Review Your Feedback</h2>
        </div>
    )


}




export default ReviewForm;