import React, { useState } from 'react';
import Button from "@mui/material/Button";
import Result from  "../Result"
import AddTask from '../addTask/AddTask';
import { useDispatch, useSelector } from 'react-redux';
import { showResult } from '../../allotmentReducer/action';
import "./tabHandler.css";

const TabHandler = () => {
    const [show, setShow] = useState(false);
    const [addShow, setAddShow] = useState(false);
    const [disable, setDisable] = useState(false)

    const dispatch = useDispatch();

    const colorBlue = {
        backgroundColor: "blue",
        color: "white",
        marginRight: "1vw"
    }

    function closeTab(){
        setAddShow(false)
    }

    return (
        <div>
        <div className="buttonDiv">
            <Button variant="contained" style={colorBlue} onClick={()=>{
                setAddShow(true)
            }}>ADD NEW STUDENT</Button>

            <Button variant="contained" disabled={disable} style={colorBlue} onClick={()=>{
              dispatch(showResult())
              setShow(true)
              setDisable(true)
              }}>GET RESULT</Button>
            </div>

        {addShow ? <AddTask closeTab={closeTab} /> : null} 


        <div className="flexBox">
        {show ? <div style={{margin:"auto"}}>
        <br /><br />
        <h2>ALLOTMENT RESULT</h2>
        <Result /></div> : null }
      </div>
        </div>
    );
};

export default TabHandler;