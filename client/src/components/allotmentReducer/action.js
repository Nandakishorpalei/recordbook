import { ADD_STUDENT_LOADING, ADD_STUDENT_SUCCESS, GET_COLLEGES_LOADING, GET_COLLEGES_SUCCESS, GET_STUDENTS_LOADING, GET_STUDENTS_SUCCESS, SHOW_RESULT, SORT_BY_PREFERENCE1, SORT_BY_PREFERENCE2, SORT_BY_PREFERENCE3 } from "./actionType"
import axios from "axios";

export const getStudentsLoading = ()=>{
    return {
        type : GET_STUDENTS_LOADING
    }
}

export const getStudentSuccess = (payload)=>{
    return {
        type : GET_STUDENTS_SUCCESS,
        payload
    }
}


export const getStudentData = (dispatch)=>{
    return ()=>{
        dispatch(getStudentsLoading);
        axios.get("https://recordbookbackend.herokuapp.com/users/students")
        .then((res)=> res.data)
        .then((response)=> {
            console.log('response:', response)
            dispatch(getStudentSuccess(response))
        })
    }
}



export const getCollegesLoading = ()=>{
    return {
        type: GET_COLLEGES_LOADING
    }
}

export const getCollegesSuccess = (payload)=> {
    return {
        type : GET_COLLEGES_SUCCESS,
        payload
    }
}

export const getCollegesData = (dispatch) =>{
    return ()=> {
        dispatch(getCollegesLoading())
        axios.get("https://recordbookbackend.herokuapp.com/colleges")
        .then((res)=> res.data)
        .then((response)=> {
            console.log('response:', response)
            dispatch(getCollegesSuccess(response))
        })
    }
}




export const addStudentLoading = ()=>{
    return {
        type: ADD_STUDENT_LOADING
    }
}

export const addStudentSuccess = (payload)=>{
    return {
        type : ADD_STUDENT_SUCCESS,
        payload
    }
} 
 


export const showResult = ()=> {
    return {
       type: SHOW_RESULT
    }
}

export const sortByPreference1 = ()=>{
    return {
        type: SORT_BY_PREFERENCE1,
        payload: "SORT_BY_PREFERENCE1"
    }
}

export const sortByPreference2 = ()=>{
    return {
        type: SORT_BY_PREFERENCE2,
        payload: "SORT_BY_PREFERENCE2"
    }
}

export const sortByPreference3 = ()=>{
    return {
        type: SORT_BY_PREFERENCE3,
        payload: "SORT_BY_PREFERENCE3"
    }
}