
const fileHandler = require("../util/FileHandler")
const path = require("path")

const dataPath = path.join(path.dirname(require.main.filename), "data", "Genre.json")

class Genre {
    constructor(id,name){
        this.id = id;
        this.name = name;
    }

    Save(){
        fileHandler.GetAllFromFile(dataPath, (genres)=>{

            if(this.id){
                const edictGenreId = genres.findIndex((ge) => ge.id === String(this.id) )
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
         fileHandler.GetAllFromFile(dataPath, (genre)=>{
         const genreToReturn = genre.find((g) => g.id === String(id))
          cb(genreToReturn)
        })
     }

    static Delete(id){
         fileHandler.GetAllFromFile(dataPath, (genres) =>{
         const genresNew = genres.filter((g) => g.id != id);
         fileHandler.SaveDataInFile(dataPath, genresNew)
        })
     }
}

module.exports = Genre