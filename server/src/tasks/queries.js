const GetByTeam = "SELECT * FROM tasks WHERE team_name=$1";
const GetDependency =
  "SELECT dependent_task_id FROM dependency WHERE task_id = $1";
const GetChild = "SELECT task_id FROM dependency WHERE dependent_task_id = $1";
const InsertTask = "INSERT INTO tasks VALUES($1,$2,$3,$4,$5,$6,$7)";
const InsertDependency = "INSERT INTO dependency VALUES($1,$2)";

module.exports = {
  GetByTeam,
  GetDependency,
  GetChild,
  InsertTask,
  InsertDependency,
};
