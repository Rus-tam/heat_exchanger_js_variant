const express = require("express");
const router = express.Router();
const airCooler = require("../controllers/airCooler");

router.get("/airCooler", airCooler.getAirCooler);

module.exports = router;
