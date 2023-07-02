const { Router } = require("express");
const router = Router();
const controller = require("./controller");

router.post("/getbyteam", controller.GetByTeam);
router.post("/getdependency", controller.GetDependency);
router.post("/getchild", controller.GetChild);
router.post("/inserttask", controller.InsertTask);
router.post("/insertdependency", controller.InsertDependency);

module.exports = router;
