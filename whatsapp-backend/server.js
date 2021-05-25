// importing 
//import express from "express";
const express = require("express"); 
const mongoose = require("mongoose");

// app config
const app =express();
const PORT = process.env.port || 3000
//middleware
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

//listen
app.listen(PORT,()=>console.log(`Listening on localhost: ${PORT}`));