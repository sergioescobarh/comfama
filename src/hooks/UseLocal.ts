import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {setLiked} from '../actions/index'

export const UseLocal = () => {
    const dispatch: any = useDispatch()
    useEffect(() => {
        !localStorage.getItem('liked') ? localStorage.setItem('liked', JSON.stringify([])) : dispatch(setLiked(JSON.parse(localStorage.getItem('liked') || '[]')))
    }, []);
};