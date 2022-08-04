
const userModel = require('../models/userModel')
const csvModel = require("../models/csvModel")
const {toCSV} = require("../lib/csv")

const dataArray = []

const uploadCSV = async(req,res)=>{
   try{
    const data = req.body;
    await csvModel.create(data);
    dataArray.push(data)
    let csv = toCSV(dataArray);
    res.attachment("WT_Task.csv").send(csv)
   }
   
   catch(error){
    console.log(error)
    res.status(500).send(error.message)
   }
}

const greetUser = async(req,res)=>{
    try{
        let name = req.body.Name;
        const found = await userModel.find({Name: name})
        if (found.length >0){
            return res.status(200).send(`BYE ${name}`)
        }
        await userModel.create(req.body)
        return res.status(200).send(`HII ${name}`)

    }
    catch(error){
        console.log(error)
        res.status(500).send(error.message)
    }
}

module.exports = {uploadCSV,greetUser};