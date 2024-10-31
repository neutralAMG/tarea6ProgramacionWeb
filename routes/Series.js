const express = require("express");

const path = require("path")

const router = express.Router();

const SeriesController = require("../Controllers/SeriesController")

router.get("/index-series", SeriesController.GetAddSeries)

router.get("/detail-series", SeriesController.GetAddSeries)

router.get("/add-series", SeriesController.GetAddSeries)

router.post("/add-series", SeriesController.PostAddSeries)

router.get("/update-series", SeriesController.GetUpdateSeries)

router.get("/update-series", SeriesController.PostAddSeries)

router.get("/delete-series", SeriesController.PostDeleteSeries)

module.exports = router