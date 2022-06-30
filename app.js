const express = require('express');
// const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const {connection} = require('./config/db');

// console.log(connection);

// Webpack

const webpack = require('webpack');
const webpackDev = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');

// Define Port
const PORT = process.env.PORT || 3050;

// init app
const app = express();     


// Middleware
app.use(webpackDev(webpack(webpackConfig)));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

const {routerOperation} = require('./apiServices/operations/operation.routes');
const {routerTypeOperation} = require('./apiServices/typeOperations/typeOperation.routes');

app.use(bodyParser.json());
app.use(routerOperation);
app.use(routerTypeOperation);



// All Operations
// app.get('/api/', (req, res)=>{
    
//     res.send('List of operations');
// });

    

// Check Connect              
connection.connect(error=>{
    if(error) throw error;
    console.log('Database Server running');
});

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));