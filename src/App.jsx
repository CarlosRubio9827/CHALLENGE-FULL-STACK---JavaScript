import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import 'Styles/main.scss';
import useApi from './useApi';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import Balance from 'Components/Balance';
import NotOperations from 'Components/NotOperations';
import LineChart from 'Components/LineChart';
import CrudOperation from 'Components/CrudOperation';


const App = ()=>{

    const [listIncome, setListIncome] = useState([]);
    const [listExpense, setListExpense] = useState([]);
    const [listAll, setListAll] = useState([]);

    const {getData} = useApi()
    
    useEffect(()=>{
        getData()
        .then((res)=>{
                setListAll(res);
                setListIncome(res.filter(i=>i.idTypeOperation.idTypeOperation == 1 && i.status == 'y'));
                setListExpense(res.filter(i=>i.idTypeOperation.idTypeOperation == 2 && i.status == 'y'));  
        })    
    },[]);
        
    return(
        <main className='main'>
            <Header/>
            {
                
            (listAll.length==0)?
                <div className="spin">
                
                </div>
            :
            
                (listAll.length>0)?
                <section className='section'>
                
                    <Balance 
                        listExpense={listExpense} 
                        listIncome={listIncome}
                    />
                    <p className='section-last'>
                        Last {(listAll.length==1)
                                ?`1 operation`
                                :(listAll.length>=10)
                                    ?`10 operations`
                                    :`${listAll.length} operations`}
                    </p>
                    <LineChart 
                        listExpense={listExpense} 
                        listIncome={listIncome} 
                    />


                    {/* <p>das</p> */}
            
                </section>
                :
                    <NotOperations/>
                
            }
            <CrudOperation />
            <Footer/>
        </main>
        )
    }
    
    export default App;     