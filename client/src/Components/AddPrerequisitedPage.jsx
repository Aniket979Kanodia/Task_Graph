import React, { useEffect, useState } from "react";
import Select from "react-select";
import "../styles/AddPrerequisitesPage.css";

const AddPrerequisitedPage = (props) => {
  const { taskData, setTaskData, handleGenerateGraph } = props;

  const [options, setOptions] = useState();

  useEffect(() => {
    const nArray = taskData.map((item) => {
      if (item.taskId) return { value: item.taskId, label: item.taskName };
    });
    setOptions(nArray);
  }, []);

  const [currTaskId, setCurrTaskId] = useState();
  const [preArray, setPreArray] = useState();

  //   console.log(options);
  const handleTaskChange = (event) => {
    const taskId = event.value;
    setCurrTaskId((prev) => taskId);
  };
  const handleChange = (array) => {
    const newPreArray = array.map((item) => {
      return item.value;
    });
    setPreArray(newPreArray);
  };

  console.log(currTaskId, preArray);

  const handleReset = () => {
    console.log("clicked...");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTaskData((prev) => {
      const newTaskArray = prev.map((item) => {
        if (item.taskId == currTaskId) {
          const b = Object.assign({}, item, { preRequisitesArray: preArray });
          return b;
        } else return item;
      });
      console.log(newTaskArray);
      return newTaskArray;
    });
    handleReset();
  };

  console.log(taskData);

  return (
    <div className="addPrerequisites--container">
      <div className="addPrerequisites--heading--box">Add Prerequisites</div>
      <div className="addPrerequisites--content--box">
        <div className="addPrerequisites--addTask--box">
          <div className="addPrerequisites--addTask--form--box">
            <form action="" className="addPrerequisites--addTask--form">
              <div className="addPrerequisites--inputs--box">
                <label htmlFor="">Choose Task</label>
                <Select
                  options={options}
                  className="addPrerequisites--inputs--select"
                  onChange={handleTaskChange}
                ></Select>
              </div>
              <div className="addPrerequisites--inputs--box">
                <label htmlFor="">Choose Prerequisites of Task</label>
                <Select
                  options={options}
                  isMulti
                  className="addPrerequisites--inputs--select"
                  onChange={handleChange}
                ></Select>
              </div>
              <div className="addPrerequisites--submit--btn--box">
                <button
                  className="addPrerequisites--submit--btn"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="addPrerequisites--generateGraph--btn--box">
            <button
              className="addPrerequisites--generateGraph--btn"
              onClick={handleGenerateGraph}
            >
              Generate Graph
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPrerequisitedPage;
