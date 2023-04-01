import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function UnderstandingForm () {

    const dispatch = useDispatch();
    const history = useHistory();
    const [understanding, setUnderstanding] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Understanding', understanding);

    dispatch({
        type: 'ADD_UNDERSTANDING',
        payload: understanding,
    });
    setUnderstanding('');
    history.push('/support')

};

return (
    <div>
        <h2>How well are you understanding the content?</h2>
        <form onSubmit = {handleSubmit}>
            <lable>
                Understanding?
                <input
                type="number"
                min="1"
                max="5"
                value={understanding}
                onChange={(event) => setUnderstanding(event.target.value)}
                required
                />
            </lable>
            <br/>
            <button type="submit">NEXT</button>
        </form>
    </div>
);

}

export default  UnderstandingForm;
