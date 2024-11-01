
const fileHandler = require("../util/FileHandler");
const path = require("path");

const dataPath = path.join( path.dirname(require.main.filename), "data", "Series.json") 

class Series {
    constructor(id,name,img,videoLink,genre){
        this.id = id;
        this.name = name;
        this.img = img,
        this.videoLink = videoLink,
        this.genre = genre;
    }

    Save(){
        fileHandler.GetAllFromFile(dataPath, (series)=>{

            if(this.id){
                const edictProductIndex = series.findIndex( (prod) => prod.id === String(this.id))
                series[edictProductIndex] = this;
                fileHandler.SaveDataInFile(dataPath, series);
            }else{
                this.id = Math.random().toString();
                series.push(this);
                fileHandler.SaveDataInFile(dataPath, series);
            }
        })
    }

    static GetAll(cb){
        fileHandler.GetAllFromFile(dataPath, cb)
    }

    static GetById(id, cb){
        fileHandler.GetAllFromFile(dataPath, (series)=>{
           const serie = series.find((p) => p.id === String(id));
           cb(serie);
        })
    }

    static Delete(id){
        fileHandler.GetAllFromFile(dataPath, (series)=>{
          const seriesNew =  series.filter((p) => p.id != id);
          fileHandler.SaveDataInFile(dataPath, seriesNew)
        })
    }

}

module.exports = Series