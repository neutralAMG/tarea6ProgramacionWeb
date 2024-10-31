const seriesModel = require("../Models/Series");
const Serie = require("../Models/Series")

exports.GetAllSeries = (req, res, next) =>{
  
seriesModel.GetAll((series) =>{
    res.render("SeriesViews/IndexSeries",{
     pageTitle: "",
     series: series,
     IsEmpty: series.length <= 0
})


})

}

exports.GetByISeries= (req, res, next) =>{

    const id = req.params.genreId;

    genreModel.GetById(id,(genre) =>{
        res.render("SeriesViews/DetailSeries",{
            pageTitle: "",
            genre: genre,

        })
    })
    
}

exports.GetAddSeries = (req, res, next) =>{
    res.render("SeriesViews/AddSeries",{})
}

exports.PostAddSeries = (req, res, next) =>{
    const name = req.body.name;
    const img = req.body.name;
    const genre = req.body.name;
    const serie = new Serie(null, name,img,genre)
    serie.Save();

    res.redirect("/")
}

exports.GetUpdateSeries = (req, res, next) =>{

    const id = req.params.genreId;

    genreModel.GetById(id,(serie) =>{
        res.render("SeriesViews/UpdateSeries",{
            pageTitle: "",
            serie: serie,
        })
    })
    
}


exports.PostUpddteSeries = (req, res, next) =>{  
    const id = req.body.id
    const name = req.body.name;
    const img = req.body.img;
    const genre = req.body.genre;
    const serie = new Serie(id, name,img,genre)
    serie.Save();

    res.redirect("/")
}


exports.PostDeleteSeries = (req, res, next) =>{
    const id = req.body.id;

    seriesModel.Delete(id);
    res.redirect("/")
}