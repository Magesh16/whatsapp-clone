// importing 
//import express from "express";
const express = require("express"); 
const mongoose = require("mongoose");
const Messages = require("./dbMessages.js");

// app config
const app =express();
const PORT = process.env.port || 3000
//middleware
app.use(express.json());

//DB config
const connection_url = "mongodb+srv://admin:dfQZF4soYoGf4K9X@cluster0.jvapi.mongodb.net/whatsappDB?retryWrites=true&w=majority"
mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//????
//api routes
app.get('/',(_req,res) => res.status(200).send("hello world"));

app.post('/messages/new', (req,res)=>{
    const dbMessage = req.body;

    Messages.create(dbMessage, (err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(`new message created: \n ${data}`);
        }
    })
})

//listen
app.listen(PORT,()=>console.log(`Listening on localhost: ${PORT}`));