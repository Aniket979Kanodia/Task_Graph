const { Router } = require("express");
const router = Router();
const controller = require("./controller");

router.post("/getbyteam", controller.GetByTeam);
router.post("/insertemployee", controller.InsertEmployee);

module.exports = router;
