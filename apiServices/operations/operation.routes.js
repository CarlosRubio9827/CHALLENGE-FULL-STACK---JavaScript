const express = require('express');
// const { resolve } = require('../../webpack.config');
const routerOperation = express.Router();
const {conOperation} = require('./operation.controller');


// Get operations
routerOperation.get('/api/operations',(req, res)=>{
    conOperation.getAll()
    .then(data=>res.send(data))
    .catch(err=>res.send(err))
})

// Get operation by id
routerOperation.get('/api/operations/:id',(req, res)=>{
    const {id} = req.params;
    conOperation.getByid(id)
    .then(data=>res.send(data))
        .catch(err => res.send(err));
    })
    
// add operation
routerOperation.post('/api/addOperations',(req, res)=>{
    const operationObj = {
        conceptOperation: req.body.conceptOperation,
        amountOperation: req.body.amountOperation,
		dateOperation: req.body.dateOperation,
		idTypeOperation: req.body.idTypeOperation,
		status: 'y',
    }
    conOperation.createOperation(operationObj)
    .then(data=>res.send(data))
    .catch(err => res.send(err));
})


// update operation
routerOperation.put('/api/updateOperation/:id',(req, res)=>{
    const operationObj = req.body;
    const {id} = req.params;
    conOperation.updateOperation(id, operationObj)
    .then((data)=>res.send(data))
    .catch((err)=>res.send(err));
})


// delete operation
routerOperation.delete('/api/deleteOperation/:id',(req, res)=>{
    const {id} = req.params;
    conOperation.deleteOperation(id)
    .then((data)=>res.send(data))
    .catch((err)=>res.send(err));
});

module.exports = {
    routerOperation
}