import React, { useState } from "react";
import TaskCard from "./TaskCard";
import DisplayTaskCard from "./DisplayTaskCard";
import { useNavigate } from "react-router-dom";
import "../styles/AddTasksPage.css";

const AddTasksPage = (props) => {
  const navigate = useNavigate();
  const { taskData, setTaskData } = props;

  const handleDelete = (taskId) => {
    console.log("clicked...");
    setTaskData((tasksArray) => {
      return tasksArray.filter((item) => item.taskId != taskId);
    });
  };

  const handleSubmit = () => {
    setTaskData((array) => {
      return array.filter((item) => item.taskId != "#");
    });

    // setTaskData(array);

    navigate("/addPrerequisites");
    //Write Your Backend Code here
  };

  console.log(taskData);
  return (
    <div className="addTask--container">
      <div className="addTask--heading--box">Assign Tasks</div>
      <div className="addTask--content--box">
        <TaskCard taskData={taskData} setTaskData={setTaskData} />
        <div className="dummy--displayTaskCard">
          {taskData.map((card, index) => {
            console.log("Changed");
            if (card.taskId != "#")
              return (
                <div className="displayTaskCard--box">
                  <DisplayTaskCard
                    taskData={taskData}
                    setTaskData={setTaskData}
                    key={card.taskId}
                    index={index}
                    handleDelete={handleDelete}
                  />
                </div>
              );
          })}
        </div>
        <div className="addTask--submit--btn--box">
          <button className="addTask--submit--btn" onClick={handleSubmit}>
            Submit All Tasks
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTasksPage;
