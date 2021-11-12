const express = require("express");
const router = express.Router();
const shellTube = require("../controllers/shellTube");

router.get("/shellTube", shellTube.getShellTube);

module.exports = router;
