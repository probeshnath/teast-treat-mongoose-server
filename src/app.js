const express = require('express')
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;




app.get("/health", (req, res) => {
    res.send("Hi this is home get API")
  })
  
  app.listen(port, () => {
    console.log(`localhost connect on ${port}`)
  })