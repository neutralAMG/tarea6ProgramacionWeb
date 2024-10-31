const express = require("express");

const path = require("path");

const router = express.Router();

const GenresController = require("../Controllers/GenresController");

router.get("/index-genre", GenresController.GetAllGenres);

router.get("/genre-detail/:genreId", GenresController.GetByIdGenres);

router.get("/add-genre", GenresController.GetAddGenres);

router.post("/add-genre", GenresController.PostAddGenres);

router.get("/update-genre:genreId", GenresController.GetUpdateGenres);

router.post("/update-genre", GenresController.PostUpddteGenres);

router.post("/delete-genre", GenresController.PostDeleteGenres);

module.exports = router;