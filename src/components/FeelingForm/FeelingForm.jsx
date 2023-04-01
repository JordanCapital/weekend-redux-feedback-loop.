import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function FeelingForm () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [feeling, setFeeling] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Feeling', feeling);

    dispatch({
        type: 'ADD_FEELING',
        payload: feeling,
    });

    setFeeling('');
    history.push('/understanding');
};

return (
    <div>
        <h2>How are you feeling today?</h2>
        <form onSubmit = {handleSubmit}>
            <lable>
                Feeling?
                <input
                type="number"
                min="1"
                max="5"
                value={feeling}
                onChange={(event) => setFeeling(event.target.value)}
                required   
                />
            </lable>
            <br />
            <button type="submit">Next</button>
        </form>
    </div>
);

};
export default FeelingForm;