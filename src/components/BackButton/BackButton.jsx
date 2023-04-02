import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function BackButton () {
    const dispatch = useDispatch();
    const history = useHistory();
    const feeling =useSelector(store => store.feeling)
}