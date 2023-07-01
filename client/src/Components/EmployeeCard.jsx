import React from "react";

const EmployeeCard = (props) => {
  return (
    <div className="addEmployee-employee--box">
      <input type="text" />
      <input type="text" />
      <FontAwesomeIcon icon={faTrash} />
    </div>
  );
};

export default EmployeeCard;
