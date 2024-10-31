const express = require("express");
const path = require("path")
const app = express();
const {engine} = require("express-handlebars")
const GenresRouter = require("./routes/Genres")
const SeriesRouter = require("./routes/Series")


app.engine("hbs", engine({layoutsDir: "views/layouts/",defaultLayout:"main-layout",extname:"hbs"}));



app.set("view engine", "hbs");
app.set("views", "views")

app.use(express.static(path.join(__dirname,"public")))

app.use(express.urlencoded({extended: false}))



app.use("/Genre",GenresRouter)
app.use("/Series ",SeriesRouter)
app.use(function(req,res,next){
    res.status(404).send("<h1>404</h1>")
})


app.listen(8000);