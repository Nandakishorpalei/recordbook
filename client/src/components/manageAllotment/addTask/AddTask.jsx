import StudentDataForm from '../studentForm/StudentDataForm';



const AddTask = ({closeTab}) => { 

    return (
        <div id="addTaskContainer">
            <div className="header">
                <h2>Add row</h2>
            </div>

            <StudentDataForm closeTab={closeTab} studentId={-1} page="add" />
      
        </div>
    );
};

export default AddTask;