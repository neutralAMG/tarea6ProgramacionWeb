const express = require("express");
const path = require("path")
const app = express();
const {engine} = require("express-handlebars")
const GenresRouter = require("./routes/Genres")
const SeriesRouter = require("./routes/Series")

app.engine("hbs", engine({helpers:{
equals: (v1,v2) => v1===v2,
}, layoutsDir: "views/layouts/",defaultLayout:"main-layout",extname:"hbs"}));



app.set("view engine", "hbs");
app.set("views", "views")

app.use(express.static(path.join(__dirname,"public")))

app.use(express.urlencoded({extended: false}))



app.use("/Genre",GenresRouter)
app.use("/Series",SeriesRouter)
app.use(function(req,res,next){
    res.redirect('/Series/index-series');
})


app.listen(8001);