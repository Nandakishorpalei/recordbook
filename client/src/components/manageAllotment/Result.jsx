import * as React from 'react';
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
import { useDispatch, useSelector } from 'react-redux'
import "./showStudentData/table.css";


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


const headerStyle={
  backgroundColor : "#0effd7"

}
const headerButton = {
color:"black"
}


export default function Result() {

    const {loading, resultData} = useSelector(store => store.allotmentData)
    console.log('resultData:', resultData)


    const headerStyle={
        backgroundColor : "#0effd7",
        color:"black"
    }

    function setColor(name){
      if(name === "IIT Bombay") return "#3e9413";
      if(name === "IIT Kanpur") return "#f09b47";
      if(name === "IIIT Hyderabad") return "lightblue";
      if(name === "IIT Madras") return "#ff1e40"; 
      if(name === "IIT Roorkee") return "#0e9bff";
      if(name === "IIM Ahmedabad") return "purple"
      return "orange"
    }

  return loading ? <div style={{width: "100vw", textAlign: "center"}}><progress></progress></div> :(
      
    <TableContainer style={{width: "60vw", margin:"auto"}}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead >
          <TableRow>
          <StyledTableCell style={headerStyle}>
            <Button style={headerButton} startIcon={<FeaturedPlayListOutlinedIcon />}>Student Name</Button> </StyledTableCell>

            <StyledTableCell style={headerStyle} align="center">
            <Button style={headerButton} startIcon={<TagOutlinedIcon fontSize='small' />}>Rank</Button></StyledTableCell>

            <StyledTableCell style={headerStyle} align="right">
            <Button style={headerButton} startIcon={<ArrowDropDownCircleOutlinedIcon fontSize='small' />} >Alloted College</Button></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { resultData.map((item, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {item.name}
              </StyledTableCell>
              <StyledTableCell align="center">{item.rank}</StyledTableCell>
              <StyledTableCell align="right">
              <Button className="collegeNames" style={{backgroundColor: setColor(item.allotedCollege), color:"black"}}>{item.allotedCollege}</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
