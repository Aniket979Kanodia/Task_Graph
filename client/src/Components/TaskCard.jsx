import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/TaskCard.css";

const TaskCard = (props) => {
  const { taskData, setTaskData } = props;

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [currTaskData, setCurrTaskData] = useState({
    taskId: "",
    taskName: "",
    employeeId: "",
    priority: "",
  });
  const employeeData = [
    { employeeId: "1234", employeeName: "harsh" },
    { employeeId: "1224", employeeName: "garvit" },
    { employeeId: "4851", employeeName: "aniket" },
    { employeeId: "7845", employeeName: "aryan" },
    { employeeId: "5447", employeeName: "ABCD" },
  ];

  const handleChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
    setCurrTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setTaskData((tasksArray) => {
      return [...tasksArray, { ...currTaskData, startDate, endDate }];
    });
    handleReset();
  };

  const handleReset = () => {
    Array.from(document.querySelectorAll("input,select")).forEach(
      (input) => (input.value = "")
    );
    setStartDate();
    setEndDate();
  };

  return (
    <div className="taskCard--container">
      <div className="taskCard--form--box">
        <form className="taskCard--form" method="POST">
          <div className="taskCard--form--inputs--container">
            <div className="taskCard--form--inputs taskCard--taskId">
              <input
                type="text"
                name="taskId"
                placeholder="Task Id"
                onChange={handleChange}
              />
            </div>
            <div className="taskCard--form--inputs taskCard--taskName">
              <input
                type="text"
                name="taskName"
                placeholder="Task Name"
                onChange={handleChange}
              />
            </div>
            <div className="taskCard--form--inputs">
              <div className="taskCard--form--inputs--datePicker--box">
                <DatePicker
                  selected={startDate}
                  onChange={setStartDate}
                  name="startDate"
                  dateFormat="MM/dd/yyyy"
                  className="taskCard--form--inputs--datePicker"
                  autoComplete="off"
                  placeholderText={"Start Date"}
                />
              </div>
            </div>
            <div className="taskCard--form--inputs">
              <div className="taskCard--form--inputs--datePicker--box ">
                <DatePicker
                  selected={endDate}
                  onChange={setEndDate}
                  name="startDate"
                  dateFormat="MM/dd/yyyy"
                  className="taskCard--form--inputs--datePicker"
                  autoComplete="off"
                  placeholderText={"End Date"}
                />
              </div>
            </div>
            <div className="taskCard--form--inputs taskCard--employeeId">
              <select name="employeeId" id="" onChange={handleChange}>
                <option value="">Select Employee</option>
                {employeeData.map((item) => {
                  const { employeeId, employeeName } = item;
                  return (
                    <option
                      value={employeeId}
                    >{`${employeeId} ${employeeName}`}</option>
                  );
                })}
              </select>
            </div>
            <div className="taskCard--form--inputs taskCard--priority">
              <select name="priority" id="" onChange={handleChange}>
                <option value="">Priority</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div className="taskCard--addButton--box">
            <input
              type="button"
              onClick={handleSubmit}
              value="Add Task"
              className="taskCard--addButton"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskCard;
