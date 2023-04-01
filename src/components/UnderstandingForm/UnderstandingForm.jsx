import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function UnderstandingForm () {

    const dispatch = useDispatch();
    const history = useHistory();
    const [feeling, setUnderstanding] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Understanding', understanding);
}
}


export default  UnderstandingForm
