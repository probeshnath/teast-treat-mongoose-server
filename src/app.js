const express = require('express')
const app = express();
require('dotenv').config();
const cors = require('cors');
const applyMiddleware = require('./middlewares/appliedMiddleware');
const port = process.env.PORT || 5000;


// middleware
applyMiddleware(app)


// check route || basic route
app.get("/health", (req, res) => {
    res.send("Hi this is home get API")
})

//   
app.all("*", (req, res, next) => {
    // res.send("sorry this is not right url")
    // console.log(req.url)
    const error = new Error(`The requested url is invalid: ${req.url}`)
    error.status = 404
    next(error)
})

app.use((err, req, res, next) => {
    console.log("from line 19")
    res.status(err.status || 500).json({
        message: err.message
    })
})


//   listen and start on localhost the server
app.listen(port, () => {
    console.log(`localhost connect on ${port}`)
})