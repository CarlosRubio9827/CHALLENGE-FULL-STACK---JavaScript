import React from "react";

const useApi = ()=>{
    const API = 'http://localhost:3050/api';

    const getData = ()=>{
        return new Promise((res, rej)=>{
            let x = fetch(`${API}/operations`)
                .then((res) => 
                    res.json()
                )
                .then((data)=>{
                    return data
                })
                // .then(data=>{
                //     return data.slice(0,5);
                // });
            res(x)
            rej(new Error('err'));
            }
        )
    }

    const AddOperation =  (data)=>{
        console.log(data)
        return  new  Promise ((res, rej)=>{
            const response =  fetch(`${API}/addOperations`, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            })
                .then((result)=>result.json())
                .then((data)=> {
                    return data
                }
            )
            res(response)
            rej(new Error({'err': 'No se guardó'}));
        })
    }

    return (
        {getData, AddOperation}
    )
}

export default useApi;