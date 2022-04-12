import React, { useState } from 'react';
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


const initial = {
    role:"student",
    name:"",
    rank: "",
    preference1:"",
    preference2:"",
    preference3:""
}

const StudentDataForm = ({closeTab}) => {

    const [studentDetail, setStudentDetail] = useState(initial);
    const {name, rank, preference1, preference2, preference3} = studentDetail;

    const labelButton = {
        color: "black"
    }

    const dispatch = useDispatch()

    function handleChange(e){
        const {name, value} = e.target;
        setStudentDetail({...studentDetail, [name]: value})
    }

    function handleSubmit(e){
        e.preventDefault();
        axios.post("https://recordbookbackend.herokuapp.com/users", studentDetail)
        .then((res)=> res.data)
        .then((savedData)=> {
            dispatch(addStudentSuccess(savedData))
            console.log(savedData)
        })

        setStudentDetail(initial)
    }

    return (
        <form id="formBox" onSubmit={handleSubmit}>
        <div className="flexBox">
            <div className="labels"><Button style={labelButton} startIcon={<FeaturedPlayListOutlinedIcon />}>Student Name</Button></div>
            <input type="text" name="name" value={name} onChange={handleChange}  required />
        </div>
        <div className="flexBox">
            <div className="labels"><Button style={labelButton} startIcon={<TagOutlinedIcon />}>Rank</Button></div>
            <input type="number" name="rank" value={rank} onChange={handleChange} required />
        </div>
        <div className="flexBox">
            <div className="labels"><Button style={labelButton} startIcon={<ArrowDropDownCircleOutlinedIcon />}>College Preference 1</Button></div>
            <input type="text" list="collegeList" name="preference1" value={preference1} onChange={handleChange} required />
            <datalist id="collegeList" >
             {<CollegeList />}
         </datalist>
        </div>
        <div className="flexBox">
            <div className="labels"><Button style={labelButton} startIcon={<ArrowDropDownCircleOutlinedIcon />}>College Preference 2</Button></div>
            <input type="text"  list="collegeList"  name="preference2" value={preference2} onChange={handleChange} required />
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
                closeTab()
            }}>Cancel</Button>
            
            <Button type="submit" className="addPageButton saveBtn" variant="contained" color="success">Save</Button>
        </div>
    </form>
    );
};

export default StudentDataForm;