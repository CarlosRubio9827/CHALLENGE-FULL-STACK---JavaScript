const {connection} = require('../../config/db');
// const { resolve } = require('../../webpack.config');
const conTypeOperation = { }


// Get all typeOperations
conTypeOperation.getAll = ()=>{
    const sql = 'SELECT * FROM alkemy.typeoperations';
    return new Promise((resolve, reject)=>{
        connection.query(sql, (err, result)=>{
            if (err)throw err;
            if(result.length > 0){
                resolve(Object.values(JSON.parse(JSON.stringify(result))));
            }else{
                reject('Not results');
            }
        })
    });
}


module.exports = {
    conTypeOperation
}