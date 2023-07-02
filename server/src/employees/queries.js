const GetByTeam = "SELECT * FROM employees WHERE team_name=$1";
const InsertEmployee = "INSERT INTO employees VALUES ($1,$2,$3);";

module.exports = {
  GetByTeam,
  InsertEmployee,
};
