const express = require("express");
const router = express.Router();

const { handleDisruption } = require("../controllers/disruptionController.cjs");

// 👇 IMPORTANT: remove extra /disruption
router.post("/", handleDisruption);

module.exports = router;