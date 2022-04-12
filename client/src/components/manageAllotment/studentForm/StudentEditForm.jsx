import React, { useEffect, useState } from 'react';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import Button from "@mui/material/Button";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CollegeList from './CollegeList';
import axios from "axios"
import "./form.css";
import { useDispatch } from 'react-redux';
import { addStudentSuccess } from '../../allotmentReducer/action';
import { getStudentData } from '../../allotmentReducer/action';


const initial = {
    role:"student",
    updaterName:"",
    name:"",
    rank: "",
    preference1:"",
    preference2:"",
    preference3:""
}

const StudentEditForm = ({studentId, hideTab}) => {

    const [studentDetail, setStudentDetail] = useState(initial);
    const {updaterName, name, rank, preference1, preference2, preference3} = studentDetail;

    const labelButton = {
        color: "black"
    }

    useEffect(()=>{
        console.log("studentId",studentId)
        if(studentId !== 0){axios.get(`https://recordbookbackend.herokuapp.com/users/${studentId}`)
        .then((res)=> res.data)
        .then((response)=> {
            setStudentDetail({
                name:response.name,
                rank: response.rank,
                preference1:response.preference1,
                preference2:response.preference2,
                preference3:response.preference3
            })

            console.log("current student Data",response)
        })
    }
    },[studentId])

    function hideTabHere(){
      hideTab()
    }

    const dispatch = useDispatch()

    function handleChange(e){
        const {name, value} = e.target;
        setStudentDetail({...studentDetail, [name]: value})
    }

    function handleSubmit(e){
        e.preventDefault();
        axios.patch(`https://recordbookbackend.herokuapp.com/users/${studentId}/${updaterName}`, studentDetail)
        .then((res)=> res.data)
        .then((savedData)=> {
            fetchStudentData(dispatch)()
            console.log(savedData)
        })

        setStudentDetail(initial)
    }

    function fetchStudentData(dispatch){
        return ()=>{
            dispatch(getStudentData(dispatch))
        }
     }

    return (
        <form id="formBox" onSubmit={handleSubmit} style={{position: "absolute", zIndex:"10", backgroundColor:"white"}}>
        <div className="flexBox">
            <div className="labels"><Button style={labelButton} startIcon={<FeaturedPlayListOutlinedIcon />}>Updater Name</Button></div>
            <input type="text" name="updaterName" value={updaterName} onChange={handleChange} placeholder="to update mention name 'Nanda'"  />
        </div>

        <div className="flexBox">
            <div className="labels"><Button style={labelButton} startIcon={<FeaturedPlayListOutlinedIcon />}>Student Name</Button></div>
            <input type="text" name="name" value={name} onChange={handleChange}   />
        </div>
        <div className="flexBox">
            <div className="labels"><Button style={labelButton} startIcon={<TagOutlinedIcon />}>Rank</Button></div>
            <input type="number" name="rank" value={rank} onChange={handleChange} />
        </div>
        <div className="flexBox">
            <div className="labels"><Button style={labelButton} startIcon={<ArrowDropDownCircleOutlinedIcon />}>College Preference 1</Button></div>
            <input type="text" list="collegeList" name="preference1" value={preference1} onChange={handleChange}  />
            <datalist id="collegeList" >
             {<CollegeList />}
         </datalist>
        </div>
        <div className="flexBox">
            <div className="labels"><Button style={labelButton} startIcon={<ArrowDropDownCircleOutlinedIcon />}>College Preference 2</Button></div>
            <input type="text"  list="collegeList"  name="preference2" value={preference2} onChange={handleChange} />
            <datalist id="collegeList" >
             {<CollegeList />}
         </datalist>
        </div>
        <div className="flexBox">
            <div className="labels"><Button style={labelButton} startIcon={<ArrowDropDownCircleOutlinedIcon />}>College Preference 3</Button></div>
            <input type="text"  list="collegeList" name="preference3" value={preference3} onChange={handleChange} required />
            <datalist id="collegeList" >
             {<CollegeList />}
         </datalist>
        </div>
        <div className="flexBox">
            <Button className="addPageButton cancelBtn" startIcon={<CloseOutlinedIcon />} style={{color: "black", backgroundColor:"lightgrey"}} 
            onClick={()=>{
                hideTabHere()
            }}>Cancel</Button>
            
            <Button type="submit" className="addPageButton saveBtn" variant="contained" color="success" 
            onClick={()=>{
                hideTabHere()
            }}>Update</Button>
        </div>
    </form>
    );
};

export default StudentEditForm;