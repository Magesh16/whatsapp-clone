// importing
//import express from "express";
const express = require("express");
const mongoose = require("mongoose");
const Messages = require("./dbMessages.js");
const Pusher = require("pusher");

// app config
const app = express();
const PORT = process.env.port || 3000;

const pusher = new Pusher({
  appId: "1209501",
  key: "47388a1a360a82e967c9",
  secret: "0d1d483312bc2cffde20",
  cluster: "eu",
  useTLS: true,
});

//middleware
// app.use(express.json());
// app.use((req,res,next)=>{
//   res.setHeader("Access-control-Allow-Origin")
// })



//DB config
const connection_url =
  "mongodb+srv://admin:dfQZF4soYoGf4K9X@cluster0.jvapi.mongodb.net/whatsappDB?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("DB connected");

  // const msgCollection = ;
  const changeStream = db.collection("messagecontents").watch();

  changeStream.on("change", (change) => {
    console.log(change);

    if(change.operationType === "insert"){
      const messageDetails = change.fullDocument;
      pusher.trigger("messages","inserted",{
        name: messageDetails.name,
        message: messageDetails.message,
      });
    }else{
      console.log("Error triggering Pusher");
    }

  });
});

//api routes
app.get("/", (_req, res) => res.status(200).send("hello world"));
app.get("/messages/sync", (_req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(`new message created: \n ${data}`);
    }
  });
});

//listen
app.listen(PORT, () => console.log(`Listening on localhost: ${PORT}`));
