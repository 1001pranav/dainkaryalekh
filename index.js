const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 3000;
const HOST = "127.0.0.1";


app.listen(PORT, HOST, async (error) => {

  try {
    if(error) 
    console.log(" Something went wrong ", error);
  else {

    await mongoose.connect(
      "mongodb://root:root@localhost:27017/"
    );

    console.log(" Express application is running in port ",HOST,":", PORT);
  }
  } catch (error) {
    console.log("Error.. There is a bug in code, please look into that", error);
  }

}); 