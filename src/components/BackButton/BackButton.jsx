import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function BackButton () {
    const dispatch = useDispatch();
    const history = useHistory();
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);

    const handleBack = () => { 

    }
// a button with onClick event that triggers handleBack function and is disabled if feeling value is empty
    return (
        <button onClick={handleBack} disabled={!feeling}>
         Back
        </button>
    );
}
export default BackButton;