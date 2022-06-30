const express  = require('express');
// const { resolve } = require('../../webpack.config');
const routerTypeOperation = express.Router();
const { conTypeOperation } =require('./typeOperation.controller');


routerTypeOperation.get('/api/typeOperations', (req,res)=>{
    conTypeOperation.getAll()
        .then(data=>res.send(data))
        .catch(err=>res.send(err))
});

module.exports = {
    routerTypeOperation
}