
const fileHandler = require("../util/FileHandler");
const path = require("path");

const dataPath = path.join( path.dirname(require.main.filename), "data", "Series.js") 

class Series {
    constructor(id,name,img,genre){
        this.id = id;
        this.naame = name;
        this.img = img,
        this.genre = genre;
    }

    Save(){
        fileHandler.GetAllFromFile(dataPath, (series)=>{

            if(this.id){
                const edictProductIndex = series.find( (prod) => prod.id === this.id)
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
           const serie = series.find((p) => p.id === id);
           cb(serie);
        })
    }

    static Delete(id, cb){
        fileHandler.GetAllFromFile(dataPath, (series)=>{
          const seriesNew =  series.filter((p) => p.id != id);
          fileHandler.SaveDataInFile(seriesNew)

        })
    }

}

module.exports = Series