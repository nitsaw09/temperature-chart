const express = require("express");
const weatherController = require("../controllers/weatherController");
const weatherApi = require("../middleware/weatherApi");
const router = express.Router();

router.get("/", weatherApi, weatherController.weatherDetails);

module.exports = router;
