import React, {useState, useEffect} from "react";
import 'Styles/balance.scss';
import { BsCashCoin } from 'react-icons/bs';


const Balance = (props)=>{

    const {listExpense, listIncome} = props;
    const [listBalance, setListBalance] = useState(0);

    // console.log(listExpense);
    // console.log(listIncome);

    useEffect(()=>{
        setListBalance(getBalance())
    },[])
    const getBalance = () =>{
        let amountExpense = 0
        let amountIncome = 0
        listExpense.forEach(i=>{
            // console.log(i.amountOperation);
            amountExpense += parseInt(i.amountOperation);
        })
        listIncome.forEach(i=>{
            // console.log(i.amountOperation);
            amountIncome += parseInt(i.amountOperation);
        })
        // console.log(amountIncome);
        return amountIncome - amountExpense;
          
    }

    // console.log(getBalance());

    

    return (
        <article className="balance">
            <ul className='balance-info'>
                <li className='balance-info-white'>My Balance</li>
                <li className={(listBalance<0)?'balance-info-red':'balance-info-white'}>$ {listBalance.toLocaleString('es-CO')}</li>
            </ul>
            <BsCashCoin className="balance-icon"/>
        </article>
    )
}

export default Balance;