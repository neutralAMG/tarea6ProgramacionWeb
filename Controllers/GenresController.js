const genreModel = require("../Models/Genre")
const Genre = require("../Models/Genre")
exports.GetAllGenres = (req, res, next) =>{

    genreModel.GetAll((genres) =>{
        res.render("GenresView/IndexGenre",{
         pageTitle: "",
         genres: genres,
         IsEmpty: genres.length <= 0
    })


})
}

exports.GetByIdGenres = (req, res, next) =>{
    const id = req.params.id;

    genreModel.GetById(id,(genre) =>{
        res.render("GenresView/DetailGenre",{
            pageTitle: "",
            genre: genre,

        })
    })
    
}


exports.GetAddGenres = (req, res, next) =>{
    res.render("GenresView/AddGenres",{})
}

exports.PostAddGenres = (req, res, next) =>{
    const name = req.body.name;
    const genre = new Genre(null, name)
    genre.Save();

    res.redirect("/Genre/index-Genre")

}

exports.GetUpdateGenres = (req, res, next) =>{

    const id = req.params.id;

    genreModel.GetById(id,(genre) =>{
        res.render("GenresView/UpdateGenre",{
            pageTitle: "",
            genre: genre,
        })
    })
    
  
}




exports.PostUpddteGenres = (req, res, next) =>{
    const name = req.body.name;
    const id = req.body.id
    const genre = new Genre(id, name)
    genre.Save();

    res.redirect("/Genre/index-Genre")
}



exports.PostDeleteGenres = (req, res, next) =>{
    const id = req.body.id
 
    genreModel.Delete(id);

    res.redirect("/Genre/index-Genre")
}