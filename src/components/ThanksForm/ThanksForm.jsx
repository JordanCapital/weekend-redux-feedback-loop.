import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ThanksForm () {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        // Clear feedback data in redux store
        dispatch({
            type: 'CLEAR_FEEDBACK'
        });
        history.push("/")

    };
    return (
        <div>
            <h2>Thank you for your feedback!</h2>
            <button onClick={handleClick}>Leave new feedback</button>
        </div>
    );

};
export default ThanksForm;