const pool = require("../../db");
const queries = require("./queries");
const { json } = require("express");

const GetByTeam = (req, res) => {
  pool.query(queries.GetByTeam, [req.body.teamName], (error, response) => {
    if (error) throw error;
    res.status(200).json(response.rows);
  });
};

const InsertEmployee = (req, res) => {
  pool.query(
    queries.InsertEmployee,
    [req.body.employeeId, req.body.employeeName, req.body.teamName],
    (error, response) => {
      if (error) throw error;
      res.status(200).json(response.rows);
    }
  );
};

module.exports = {
  GetByTeam,
  InsertEmployee,
};
