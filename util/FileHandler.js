const { log } = require("console");
const { json } = require("express");
const fs = require("fs");


exports.GetAllFromFile =(datapath, calback) =>{
  fs.readFile(datapath, "utf-8",function(error, data){
    if(error){
        calback([])
    }else if(data.trim() === ""){
      calback([])
      return
    }
    else{
      
        calback(JSON.parse(data));
    }
  })
}


exports.SaveDataInFile =(datapath, data) =>{
    fs.writeFile(datapath, JSON.stringify(data,null,2),function(error){
      if(error){
        console.log(error)
      }
    })
  }