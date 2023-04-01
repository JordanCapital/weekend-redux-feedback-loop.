import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SupportForm (){
    const dispatch = useDispatch();
    const history = useHistory();
    const [support, setSupport] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Support', support);

    dispatch({
        type:'ADD_SUPPORT',
        payload: support,

    });
    setSupport('');
    history.push('/comments');
};

return (
    <div>
        <h2>How well are you being supported?</h2>
        <form onSubmit={handleSubmit}>
        <lable>
            Supported?
            <input
            type="number"
            min="1"
            max="5"
            value={support}
            onChange={(event) => setSupport(event.target.value)}
            required 
            />
        </lable>
        <br/>
        <button type="submit">NEXT</button>
        </form>
    </div>
);


};

export default SupportForm;