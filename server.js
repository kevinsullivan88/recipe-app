const path = require('path');

//import express module
const express = require('express');
const apiRouter = require('./server/routers');
// initialize express app
const app = express();
const PORT = 3000;
const morgan = require('morgan');

app.use(morgan("tiny"));
app.use(express.json());

// use router for all requests to /api
app.use('/api', apiRouter);

// serve static files from public directory
app.use(express.static(path.join(__dirname, 'build'))); 


app.get('/', (req,res) => {
    console.log("hit server")
    res.sendFile(path.resolve(__dirname, './build/index.html'));
})



//error handler
app.use((err, req, res, next) => {
    // default error object we are creating
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    }
    // we use Object.assign to create a new error object by merging the default error with provided error object
    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj.log)
    res.status(errorObj.status).json(errorObj.message);
  

  })


// start server and log that it's happening

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})

module.exports = app;