const GetByTeam = "SELECT * FROM employees WHERE team_name=$1";

module.exports = {
  GetByTeam,
};
