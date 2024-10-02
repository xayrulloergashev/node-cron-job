const router = require("express").Router();
const Controller = require("./controller");

router.route("/").post(Controller.addNew);
router.route("/").get(Controller.getAll);

module.exports = router;
