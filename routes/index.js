const express = require("express");
const router = express.Router();
const index = require("../controllers/index");

/* GET home page. */
router.get("/", index.getIndex);

router.post("/exchanger-selection", index.postExchangerSelection);

router.get("/info", index.getInfo);

module.exports = router;
