const seriesModel = require("../Models/Series");
const genreModel = require("../Models/Genre");
const Serie = require("../Models/Series")

exports.GetAllSeries = (req, res, next) =>{
  
seriesModel.GetAll((series) =>{
    genreModel.GetAll((genres) =>{
    res.render("SeriesViews/IndexSeries",{
     pageTitle: "",
     series: series,
     genres: genres,
     IsEmpty: series.length <= 0
    })
})


})

}


exports.GetMantSeries = (req, res, next) =>{


    seriesModel.GetAll((series) =>{
        res.render("SeriesViews/MantIndexSeries",{
            pageTitle: "",
            series: series,
        })
    })
    
  
}
exports.filterByName = (req, res, next) =>{
    const name = req.body.name;

    seriesModel.GetByName(name, (serie) =>{
        res.render("SeriesViews/DetailSeries",{
            pageTitle: "",
            serie: serie,
        })
    })
    
}

exports.filterByGeneres = (req, res, next) =>{
    const genre = req.body.genre;
    seriesModel.GetByName(genre, (series) =>{
        genreModel.GetAll((genres) =>{
        res.render("SeriesViews/IndexSeries",{
            pageTitle: "",
            series: series,
            genres: genres
        })
    })

    })

}

exports.GetByISeries= (req, res, next) =>{

    const id = req.params.id;

    seriesModel.GetById(id,(serie) =>{
     
          res.render("SeriesViews/DetailSeries",{
            pageTitle: "",
            serie: serie,

        })
    
      
    })
    
}

exports.GetAddSeries = (req, res, next) =>{ 
    genreModel.GetAll((genres) =>{

    res.render("SeriesViews/AddSeries",{
        genres:genres
    }) 

 })
}


exports.PostAddSeries = (req, res, next) =>{
    const name = req.body.name;
    const img = req.body.img;
    const videoLink = req.body.videoLink;
    const genre = req.body.genre;
    const serie = new Serie(null, name,img,videoLink,genre)
    serie.Save();

    res.redirect("/series/MantIndex-series")
}

exports.GetUpdateSeries = (req, res, next) =>{

    const id = req.params.id;
    genreModel.GetAll((genres) =>{
    seriesModel.GetById(id,(serie) =>{
        
        res.render("SeriesViews/UpdateSeries",{
            pageTitle: "",
            serie: serie,
            genres: genres
             })
        })
    })
    
}


exports.PostUpddteSeries = (req, res, next) =>{  
    const id = req.body.id
    const name = req.body.name;
    const img = req.body.img;
    const videoLink = req.body.videoLink;
    const genre = req.body.genre;
    const serie = new Serie(id, name,img,videoLink,genre)
    serie.Save();

    res.redirect("/series/MantIndex-series")
}


exports.PostDeleteSeries = (req, res, next) =>{
    const id = req.body.id;

    seriesModel.Delete(id);
    res.redirect("/series/MantIndex-series")
}