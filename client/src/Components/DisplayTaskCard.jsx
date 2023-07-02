import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/DisplayTaskCard.css";
import "../styles/DisplayTaskCard.css";

const DisplayTaskCard = (props) => {
  const { taskData, setTaskData, index, handleDelete } = props;

  const [startDate, setStartDate] = useState(taskData[index].startDate);
  const [endDate, setEndDate] = useState(taskData[index].endDate);
  const [currTaskData, setCurrTaskData] = useState({
    taskId: taskData[index].taskId,
    taskName: taskData[index].taskName,
    employeeId: taskData[index].employeeId,
    priority: taskData[index].priority,
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
      let newTaskArray = tasksArray.map((card, ind) => {
        if (ind === index) return { ...currTaskData, startDate, endDate };
        else return card;
      });
      return newTaskArray;
    });
  };

  return (
    <div className="displayTaskCard--container">
      <div className="displayTaskCard--form--box">
        <form className="displayTaskCard--form" method="POST">
          <div className="displayTaskCard--form--inputs displayTaskCard--taskId">
            <input
              type="text"
              name="taskId"
              placeholder={currTaskData.taskId}
              onChange={handleChange}
            />
          </div>
          <div className="displayTaskCard--form--inputs displayTaskCard--taskName">
            <input
              type="text"
              name="taskName"
              placeholder={currTaskData.taskName}
              onChange={handleChange}
            />
          </div>
          <div className="displayTaskCard--form--inputs">
            <div className="displayTaskCard--form--inputs--datePicker--box">
              <DatePicker
                selected={startDate}
                onChange={setStartDate}
                name="startDate"
                dateFormat="MM/dd/yyyy"
                className="displayTaskCard--form--inputs--datePicker"
              />
            </div>
          </div>
          <div className="displayTaskCard--form--inputs">
            <div className="displayTaskCard--form--inputs--datePicker--box">
              <DatePicker
                selected={endDate}
                onChange={setEndDate}
                name="startDate"
                dateFormat="MM/dd/yyyy"
                className="displayTaskCard--form--inputs--datePicker"
              />
            </div>
          </div>
          <div className="displayTaskCard--form--inputs displayTaskCard--employeeId">
            <select
              name="employeeId"
              onChange={handleChange}
              value={currTaskData.employeeId}
            >
              <option value={currTaskData.employeeId}>
                {currTaskData.employeeId}
              </option>
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
          <div className="displayTaskCard--form--inputs displayTaskCard--priority">
            <select name="priority" id="" onChange={handleChange}>
              <option value="">{currTaskData.priority}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="displayTaskCard--Buttons" onClick={handleSubmit}>
            <FontAwesomeIcon
              icon={faFloppyDisk}
              className="displayTaskCard--Buttons--icon"
            />
          </div>
          <div
            className="displayTaskCard--Buttons"
            onClick={() => handleDelete(currTaskData.taskId)}
          >
            <FontAwesomeIcon
              icon={faTrash}
              className="displayTaskCard--Buttons--icon"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DisplayTaskCard;
