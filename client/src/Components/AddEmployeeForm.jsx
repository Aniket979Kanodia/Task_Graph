import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../styles/AddEmployee.css";

const AddEmployeeForm = (props) => {
  const navigate = useNavigate();
  const [teamName, setTeamName] = useState("Code Break");
  const { handleGenerateGraph } = props;

  const [EmployeeArray, setEmployeeArray] = useState();
  const [EmployeeData, setEmployeeData] = useState([]);

  // useEffect(() => {
  //   // insertEmployeeData();
  // }, [EmployeeData]);

  async function handleSubmit(event) {
    // event.preventDefault();
    console.log(EmployeeData);
    for (let i = 0; i < EmployeeData.length; i++) {
      const response = await fetch(
        "http://localhost:3000/employee/insertemployee",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            employeeId: EmployeeData[i].employeeId,
            employeeName: EmployeeData[i].employeeName,
            teamName: teamName,
          }),
        }
      );
      console.log("Hello");
      const data = await response.json();
      console.log(data);
    }
    navigate("/addTaskPage");
  }
  const handleChange = (event, key) => {
    const { value, name } = event.target;
    // console.log(name, value, key);
    setEmployeeData((DataArray) => {
      if (DataArray[key]) {
        DataArray[key] = { ...DataArray[key], [name]: value };
      } else {
        DataArray[key] = { employeeId: "", employeeName: "" };
      }
      return DataArray;
    });
  };

  const handleDelete = (event, key) => {
    console.log("clicked...", key);
    // setEmployeeArray((DataArray) => {
    //   let newArray = DataArray;
    //   newArray = newArray.filter((item, index) => index === key);
    //   return newArray;
    // });
  };

  const handleChange_TeamName = (event) => {
    const { value } = event.target;
    setTeamName(value);
  };
  //   console.log(EmployeeData);
  //   console.log(teamName);

  const element = (props) => {
    const { key } = props;
    return (
      <div className="addEmployee-employee--box">
        <input
          type="text"
          name="employeeId"
          placeholder="Employee Id"
          onChange={(e) => handleChange(e, key)}
          className="addEmployee-inputs"
        />
        <input
          type="text"
          name="employeeName"
          placeholder="Employee Name"
          onChange={(e) => handleChange(e, key)}
          className="addEmployee-inputs"
        />
        {
          // <div
          //   className="addEmployee--icon--container"
          //   onClick={(e) => handleDelete(e, key)}
          // >
          //   <FontAwesomeIcon icon={faTrash} />
          // </div>
        }
      </div>
    );
  };

  const handleAddButton = () => {
    setEmployeeArray((prev) => {
      let k = EmployeeArray.length;
      return [...prev, element({ key: k })];
    });
    // setEmployeeData((prev) => [...prev, {}]);
  };

  useEffect(() => {
    setEmployeeArray([element({ key: 0 })]);
  }, []);
  // console.log(EmployeeData);

  return (
    <div className="addEmployee--container">
      <div className="addEmployee--heading--box">
        <div className="addEmployee--heading">Welcome Scrum Master</div>
      </div>
      <div className="addEmployee--content--box">
        <div className="addEmployee--content">
          <div className="addEmployee--teamName--form--container">
            <form action="" className="addEmployee--teamName--form">
              <div className="addEmployee--teamName--box">
                <input
                  type="text"
                  placeholder={teamName}
                  className="addEmployee--teamName--input"
                  onChange={handleChange_TeamName}
                />
                <div className="addEmployee--teamName--icon--box">
                  <FontAwesomeIcon
                    icon={faPencil}
                    className="addEmployee--teamName--icon"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="addEmployee--options--box">
            <div className="addEmployee--options createTask">
              <Link to="/addTaskPage" className="addEmployee--options--link">
                Assign Tasks
              </Link>
            </div>
            <div className="addEmployee--options">
              <Link
                to="/addEmployee"
                className="addEmployee--options--link genLink"
                onClick={handleGenerateGraph}
              >
                Generate Graph
              </Link>
            </div>
          </div>

          <div className="addEmployee--addBox">
            <div className="addEmployee--addBox--heading--box">
              Add Employees
            </div>
            <div className="addEmployee--employee--form--box">
              <form className="addEmployee--employee--form">
                {EmployeeArray}
                <div
                  onClick={handleAddButton}
                  className="addEmployee--addButton--box"
                >
                  <div className="addEmployee--addButton">+Add More</div>
                </div>
                <div className="addEmployee--submitButton--box">
                  <input
                    type="button"
                    onClick={handleSubmit}
                    className="addEmployee--submitButton"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeForm;
