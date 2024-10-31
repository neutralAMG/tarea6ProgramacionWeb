
const fileHandler = require("../util/FileHandler")
const path = require("path")

const dataPath = path.join(path.dirname(require.main.filename), "data", "Genre.js")

class Genre {
    constructor(id,name){
        this.id = id;
        this.naame = name;
    }

    Save(){
        fileHandler.GetAllFromFile(dataPath, (genres)=>{

            if(this.id){
                const edictGenreId = genres.find((ge) => ge.id === this.id )
                genres[edictGenreId] = this;
                fileHandler.SaveDataInFile(dataPath, genres)

            }else{
               this.id = Math.random().toString();
               genres.push(this);
               fileHandler.SaveDataInFile(dataPath,genres)
            }
        })
    }
    static GetAll(cb){
      fileHandler.GetAllFromFile(dataPath,cb);
    }

    static GetById(id, cb){
         fileHandler.GetAllFromFile(data, (genres)=>{
         const genre = genres.find((g) => g.id === id)
          cb(genre)
        })
     }

    static Delete(id, cb){
         fileHandler.GetAllFromFile(dataPath, (genres) =>{
         const genresNew = genres.filter((g) => g.id != id);
         fileHandler.SaveDataInFile(genresNew)
        })
     }
}