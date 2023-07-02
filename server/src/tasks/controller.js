const pool = require("../../db");
const queries = require("./queries");
const { json } = require("express");

const GetByTeam = (req, res) => {
  pool.query(queries.GetByTeam, [req.body.teamName], (error, response) => {
    if (error) throw error;
    res.status(200).json(response.rows);
  });
};

const GetDependency = (req, res) => {
  pool.query(queries.GetDependency, [req.body.taskId], (error, response) => {
    if (error) throw error;
    res.status(200).json(response.rows);
  });
};

const GetChild = (req, res) => {
  pool.query(queries.GetChild, [req.body.taskId], (error, response) => {
    if (error) throw error;
    res.status(200).json(response.rows);
  });
};

const InsertTask = (req, res) => {
  pool.query(
    queries.InsertTask,
    [
      req.data.taskId,
      req.data.taskName,
      req.data.startDate,
      req.data.endDate,
      req.data.assignedTo,
      req.data.priority,
      req.data.teamName,
    ],
    (error, response) => {
      if (error) throw error;
      res.status(200).json(response.rows);
    }
  );
};

const InsertDependency = (req, res) => {
  pool.query(
    queries.InsertDependency,
    [req.body.taskId, req.body.dependentTaskId],
    (error, response) => {
      if (error) throw error;
      res.status(200).json(response.rows);
    }
  );
};

module.exports = {
  GetByTeam,
  GetDependency,
  GetChild,
  InsertTask,
  InsertDependency,
};
