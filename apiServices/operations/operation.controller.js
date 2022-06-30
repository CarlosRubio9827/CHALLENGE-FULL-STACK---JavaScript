const {connection} = require('../../config/db');
// const { resolve } = require('../../webpack.config');
const conOperation = { }

// Get all operations
conOperation.getAll = async ()=>{
    const sql = 'SELECT * FROM alkemy.operations';
    return new Promise((resolve, reject)=>{
        connection.query(sql, (err, result)=>{
            if(err) throw err;
            if(result.length >0 ){
                result.map((i)=>{
                    getTypeOperation(i.idTypeOperation)
                    .then((data) =>{
                        // console.log(data);
                        i.idTypeOperation = data;
                    });
                })
                setTimeout(()=>{
                    resolve(
                        Object.values(JSON.parse(JSON.stringify(result)))
                    ) 
                }, 500)
            }else{
                reject({"data":"Not Found"});   
            }     
        });
    })
}

// Get Operation entry
// conOperation.getOperationEntry = ()=>{
//     const sql = 'SELECT * FROM alkemy.operations WHERE idTypeOperation = 1';
//     return new Promise((resolve, reject)=>{
//         connection.query(sql, (err, result)=>{
//             if(err) throw err;
//             if(result.length > 0){

//             }
//         })
//     });
// }


// Get operation by id
conOperation.getByid = (id)=>{    
    const sql = `SELECT * FROM alkemy.operations WHERE idOperations = ${id}`;
    return new Promise((resolve, reject)=>{
        connection.query(sql,(err, result)=>{
            if(err) throw err;
            if(result.length > 0 ){
                const id2 = result[0].idTypeOperation;
                const sql2 = `SELECT * FROM alkemy.typeoperations WHERE idTypeOperation = ${id2}`
                connection.query(sql2, (err2, result2)=>{
                    if(err2) throw err2;
                    if(result2.length > 0 ){
                        result[0].idTypeOperation = result2[0];
                        resolve(
                            Object.values(JSON.parse(JSON.stringify(result)))
                            );
                        }        
                    })
            }else{
                reject({"data":"Not Found"});   
            }
        });
    })
}
    
// Get operation by id
function getTypeOperation(idTO){
    const sql = `SELECT * FROM alkemy.typeoperations WHERE idTypeOperation = ${idTO}`;
    var typeOperation;
    return new Promise((resolve, reject)=>{
        connection.query(sql, (err, result)=>{
           if (err) throw err;
           if(result.length>0){
               typeOperation = Object.values(JSON.parse(JSON.stringify(result)))
               // console.log(typeOperation[0]);
               resolve (typeOperation[0]);
            }else{
                reject({"data":"Not Found"});   
            }
        });
    })   
}

// Create operation
conOperation.createOperation=(operationObj)=>{
    const sql = 'INSERT INTO alkemy.operations SET ?';
    return new Promise((resolve, reject)=>{
        connection.query(sql, operationObj, error =>{
            if (error) {
                reject(error);
                throw error
            };
            resolve({"status": "Operation success"});
        })
    })
}

// Update operation
conOperation.updateOperation=(id, operationObj)=>{
    const {conceptOperation, amountOperation, dateOperation, idTypeOperation} = operationObj;
    const sql = `UPDATE alkemy.operations SET 
                    conceptOperation = '${conceptOperation}', 
                    amountOperation = '${amountOperation}', 
                    dateOperation = '${dateOperation}', 
                    idTypeOperation = '${idTypeOperation}' 
                WHERE idOperations = ${id};`;
    return new Promise((resolve, reject)=>{
        connection.query(sql, error =>{
            if (error){
                reject(error)
                throw error;
            } 
            resolve({"status": "Operation success"});
        })
    })
}

// Delete operation
conOperation.deleteOperation = (id)=>{
    const sql = `UPDATE alkemy.operations SET 
                status = 'n'            
    WHERE idOperations = ${id};`;
    return new Promise((resolve, reject)=>{
        connection.query(sql, error =>{
            if(error) {
                reject(error);
                throw error;
            }
            resolve({"status": "Operation success"});
        })
    })
}

// connection.connect(error=>{
//     if(error) throw error;
//     console.log('Database Server running');
// });


module.exports = {
    conOperation
}