import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function CommentsForm () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Comments', comments);

    dispatch({
        type: 'ADD_COMMENTS',
        payload: comments,
    });

    setComments('');
    history.push('/review');
    };

    return (
        <div>
            <h2>Any comments you want to leave?</h2>
            <form onSubmit={handleSubmit}>
            <lable>
                comments
                <input
                type="text"
                value={comments}
                onChange={(event) => setComments(event.target.value)}
                />
            </lable>
            <br/>
            <button type="submit">NEXT</button>
            </form>
        </div>
    );  
};

export default CommentsForm;