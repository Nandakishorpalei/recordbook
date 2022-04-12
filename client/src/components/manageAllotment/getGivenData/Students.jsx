import React, { useEffect } from 'react';
import {getStudentData} from "../../allotmentReducer/action";
import { useDispatch, useSelector } from 'react-redux';


const Students = ({showData}) => {

    const dispatch = useDispatch();
    const {loading, studentsData} = useSelector(store => store.allotmentData)
    console.log('studentsData:', studentsData)

    useEffect(()=>{
        fetchStudentData(dispatch)()
    },[])
 
    function fetchStudentData(dispatch){
       return ()=>{
           dispatch(getStudentData(dispatch))
       }
    }

    return 
};

export default Students;