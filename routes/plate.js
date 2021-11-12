const express = require("express");
const router = express.Router();
const plate = require("../controllers/plate");

router.get("/plate", plate.getPlate);

router.post("/plate-exchanger-calculation", plate.postInitialData);

module.exports = router;
