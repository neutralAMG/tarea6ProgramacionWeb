const { json } = require("express");
const fs = require("fs");


exports.GetAllFromFile =(datapath, calback) =>{
  fs.readFile(datapath, function(error, data){
    if(error){
        calback([])
    }else{
        calback(JSON.parse(data));
    }
  })
}


exports.SaveDataInFile =(datapath, data, calback) =>{
    fs.readFile(datapath, JSON.stringify(data),function(error, data){
     
    })
  }