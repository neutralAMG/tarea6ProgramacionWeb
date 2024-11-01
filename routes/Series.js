const express = require("express");

const path = require("path")

const router = express.Router();

const SeriesController = require("../Controllers/SeriesController")

router.get("/index-series", SeriesController.GetAllSeries)

router.get("/MantIndex-series", SeriesController.GetMantSeries)

router.get("/detail-series/:id", SeriesController.GetByISeries)

router.get("/add-series", SeriesController.GetAddSeries)

router.post("/add-series", SeriesController.PostAddSeries)

router.get("/update-series/:id", SeriesController.GetUpdateSeries)

router.post("/update-series", SeriesController.PostUpddteSeries)

router.post("/delete-series", SeriesController.PostDeleteSeries)

module.exports = router