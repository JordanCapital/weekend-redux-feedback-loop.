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
}


}