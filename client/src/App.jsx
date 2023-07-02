import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEmployeeForm from "./Components/AddEmployeeForm";
import AddTasksPage from "./Components/AddTasksPage";
import AddPrerequisitedPage from "./Components/AddPrerequisitedPage";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [taskData, setTaskData] = useState([
    {
      taskId: "#",
      taskName: "",
      startDate: "",
      endDate: "",
      employeeId: "",
      priority: "",
      preRequisitesArray: [],
    },
  ]);

  const handleGenerateGraph = () => {
    console.log("generate clicked...");
    // Store Task Data From Here
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AddEmployeeForm handleGenerateGraph={handleGenerateGraph} />
            }
          ></Route>
          <Route
            path="/addTaskPage"
            element={
              <AddTasksPage taskData={taskData} setTaskData={setTaskData} />
            }
          ></Route>
          <Route path="/addEmployee" element={<AddEmployeeForm />}></Route>
          <Route
            path="/addPrerequisites"
            element={
              <AddPrerequisitedPage
                taskData={taskData}
                setTaskData={setTaskData}
                handleGenerateGraph={handleGenerateGraph}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
