import  React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from "@mui/material/Button";
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { useDispatch, useSelector } from 'react-redux'
import "./table.css";
import { sortByPreference1, sortByPreference2, sortByPreference3 } from '../../allotmentReducer/action';
import StudentDataForm from '../studentForm/StudentDataForm';
import StudentEditForm from '../studentForm/StudentEditForm';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function StudentDisplay() {

    const {loading, studentsData} = useSelector(store => store.allotmentData)
    const [studentId, setStudentId] = useState(0);
    const [showtab, setShowTab] = useState(false)


    const dispatch = useDispatch()

    const headerStyle={
        backgroundColor : "#0effd7"
      
    }
    const headerButton = {
      color:"black"
    }

    function setColor(name){
      if(name === "IIT Bombay") return "#3e9413";
      if(name === "IIT Kanpur") return "#f09b47";
      if(name === "IIIT Hyderabad") return "lightblue";
      if(name === "IIT Madras") return "#ff1e40";
      if(name === "IIT Roorkee") return "#0e9bff";
      if(name === "IIM Ahmedabad") return "purple";
      return "orange"
    }

    function closeEditTab(){
      setShowTab(false)
    }

  return loading ? <div style={{width: "100vw", textAlign: "center"}}><progress></progress></div> :(
    <>
    <div style={{width: "60vw", margin:"auto", display: showtab ? "block" : "none"}}>
      <StudentEditForm studentId={studentId} hideTab={closeEditTab} />
    </div>

    <TableContainer style={{width: "80vw", margin:"auto"}}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell style={headerStyle}>
            <Button style={headerButton} startIcon={<FeaturedPlayListOutlinedIcon />}>Student Name</Button> </StyledTableCell>

            <StyledTableCell style={headerStyle} align="center">
            <Button style={headerButton} startIcon={<TagOutlinedIcon fontSize='small' />}>Rank</Button></StyledTableCell>

            <StyledTableCell style={headerStyle} align="center">
            <Button style={headerButton} startIcon={<ArrowDropDownCircleOutlinedIcon fontSize='small' />} endIcon={<ArrowDropDownOutlinedIcon fontSize='small' />} onClick={()=>{
              dispatch(sortByPreference1())
            }}>College Preference1</Button></StyledTableCell>
            
            <StyledTableCell style={headerStyle} align="center">
            <Button style={headerButton} startIcon={<ArrowDropDownCircleOutlinedIcon fontSize='small' />} endIcon={<ArrowDropDownOutlinedIcon fontSize='small' />} onClick={()=>{
              dispatch(sortByPreference2())
            }}>College Preference2</Button></StyledTableCell>
           
            <StyledTableCell style={headerStyle} align="center">
            <Button style={headerButton} startIcon={<ArrowDropDownCircleOutlinedIcon fontSize='small' />} endIcon={<ArrowDropDownOutlinedIcon fontSize='small' />} onClick={()=>{
              dispatch(sortByPreference3())
            }}>College Preference3</Button></StyledTableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {studentsData.map((item, index) => (
            <StyledTableRow key={index} onClick={()=> {
              setStudentId(item._id);
              setShowTab(true)
              }}>
              <StyledTableCell component="th" scope="row">
                {item.name}
              </StyledTableCell>
              <StyledTableCell align="center">{item.rank}</StyledTableCell>
              <StyledTableCell align="center">
              <Button className="collegeNames" style={{backgroundColor: setColor(item.preference1), color:"black"}}>{item.preference1}</Button>
              </StyledTableCell>
              <StyledTableCell align="center">
              <Button className="collegeNames" style={{backgroundColor: setColor(item.preference2), color:"black"}}>{item.preference2}</Button>
              </StyledTableCell>
              <StyledTableCell align="center">
              <Button className="collegeNames" style={{backgroundColor: setColor(item.preference3), color:"black"}}>{item.preference3}</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
