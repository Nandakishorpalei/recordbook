import './App.css';
import Students from './components/manageAllotment/getGivenData/Students';
import Colleges from './components/manageAllotment/getGivenData/Colleges';
import StudentDisplay from './components/manageAllotment/showStudentData/studentDisplay';
import TabHandler from './components/manageAllotment/tabHandler/TabHandler';


function App() {

  return (
    <div className="App">
      <h1>College Allotment System</h1>

      <h3>Student Data</h3>
      <h6>for update click on any student</h6>
        <StudentDisplay />
 
      <Colleges />
      <Students />
      
      <TabHandler />

    </div>
  ); 
}

export default App;
