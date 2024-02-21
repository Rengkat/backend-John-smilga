const express = require("express");
const { dashboard, login } = require("../controllers/main");
const router = express.Router();
const authentication = require("../middleware/auth");
router.route("/dashboard").get(authentication, dashboard); // will check dashboard first before next
router.route("/login").post(login);
module.exports = router;
