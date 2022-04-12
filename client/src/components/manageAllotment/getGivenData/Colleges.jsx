import React, { useEffect } from 'react';
import {getCollegesData} from "../../allotmentReducer/action";
import { useDispatch, useSelector } from 'react-redux'

const Colleges = () => {

    const dispatch = useDispatch();
    const {loading, collegesData} = useSelector(store => store.allotmentData)
    console.log('collegesData:', collegesData)

    useEffect(()=>{
        fetchCollegesData(dispatch)()
    },[]) 

    function fetchCollegesData(dispatch){
       return ()=>{
           dispatch(getCollegesData(dispatch))
       }
    }

    return 
};

export default Colleges;