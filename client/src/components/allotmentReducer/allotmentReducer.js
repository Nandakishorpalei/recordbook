import { ListItem } from "@mui/material"
import { GET_STUDENTS_LOADING, GET_STUDENTS_SUCCESS, ADD_STUDENT_LOADING, ADD_STUDENT_SUCCESS, 
    GET_COLLEGES_LOADING, GET_COLLEGES_SUCCESS, SHOW_RESULT, SORT_BY_PREFERENCE1, SORT_BY_PREFERENCE2, SORT_BY_PREFERENCE3 } from "./actionType"
import filterResultItems from "./FilterResult"

const init = {
    loading : false,
    studentsData : [],
    collegesData: [],
    resultData: []
}

export const allotmentReducer = (store = init, {type, payload}) =>{
    switch (type ){
        case GET_STUDENTS_LOADING: return {
            ...store, 
            loading : true
        }
        case GET_STUDENTS_SUCCESS: return {
            ...store, 
            loading: false,
            studentsData : payload
        }

        case GET_COLLEGES_LOADING: return {
            ...store,
            loading: true
        }
        case GET_COLLEGES_SUCCESS: return {
            ...store, 
            loading: false,
            collegesData: payload
        }


        case ADD_STUDENT_LOADING: return {
            ...store, 
            loading : true
        }
        case ADD_STUDENT_SUCCESS: return {
            ...store, 
            loading: false,
            studentsData : [...store.studentsData, payload]
        }

        case SHOW_RESULT : return {
            ...store, 
            resultData: filterResultItems(store.studentsData, store.collegesData)
        }
        
        case SORT_BY_PREFERENCE1: return {
            ...store,
            studentsData: sortByPref(store.studentsData, payload)
        }
        case SORT_BY_PREFERENCE2: return {
            ...store,
            studentsData: sortByPref(store.studentsData, payload)
        }
        case SORT_BY_PREFERENCE3: return {
            ...store,
            studentsData: sortByPref(store.studentsData, payload)
        }
        default : return store
    }
}


function sortByPref(data, value){
  let studentData = [...data];
  studentData.sort((a,b)=> a.value > b.value ? 1 : -1);

  return studentData;
}


