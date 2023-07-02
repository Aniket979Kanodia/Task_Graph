const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const employeeRoutes = require("./src/employees/routes");
const taskRoutes = require("./src/employees/routes");
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/employee", employeeRoutes);
app.use("/task", taskRoutes);

app.listen(port, () => console.log("listening on port ${port}"));
