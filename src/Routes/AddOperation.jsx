import React,{useState} from "react";
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import {Link, useLocation, useNavigate } from 'react-router-dom';
import {RiArrowLeftLine} from 'react-icons/ri';
import {MdOutlineCancel} from 'react-icons/md';
import {IoIosAdd} from 'react-icons/io';
import 'Styles/addOperation.scss';
import swal from 'sweetalert';
import { useForm } from "react-hook-form";

import useApi from '../useApi';


const AddOperation = ()=>{
  
    const navigate = useNavigate();
    
    const getToday = ()=>{
        
        let today = new Date();
        let yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        today = dd + '/' + mm + '/' + yyyy;
        return today;
    }

    const getTypeOperation = (typeOperation)=>{
        return (typeOperation)?  1 : 2
    }
    
    const { register, handleSubmit,setValue, watch, formState: { errors } } = useForm();
    const onSubmit = async  (data) =>{
        
        swal({
            title: "Do you want add this operation?",
            text: "You are going to add this operation to list!",
            icon: "info",
            buttons: true,
            dangerMode: false,
          })
          .then((acepted) => {
            if (acepted) {
                // navigate('/')
                const dataSend = {
                    conceptOperation: data.concept,
                    amountOperation: data.amount,
                    dateOperation: getToday(),
                    idTypeOperation: getTypeOperation(data.typeOperation)
                }    

                const {AddOperation} = useApi();

                AddOperation(dataSend)
                    .then((res)=>{
                            (res.status == 'Operation success')
                                ?swal({
                                    title: "Added!",
                                    text: "Your operation has been added.",
                                    type: "success",
                                    timer: 3000
                                })
                                :   swal({
                                        title: "Error!",
                                        text: "Something is bad :(.",
                                        type: "error",
                                        timer: 3000
                                    })
                            setValue("amount", "")
                            setValue("concept", "")
                            console.log(res)
                        }
                    );
                    

                setTimeout(()=>{
                    // console.log(response2);
                },1000)
                console.log(data);
            }
          });

    } 

    // function onSubmit(){

    //     swal("Click on either the button or outside the modal.")
    //     .then((value) => {
    //         alert("example")
    //       swal(`The returned value is: ${value}`);
    //     });
    // }

    const cancel = ()=>{
        swal({
            title: "Do you want cancel?",
            text: "You are going to cancel the registration of the operation!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                navigate('/')
            }
          });
    }
    
    // const register = ()=>{

    // }

    return (
        <main>
            <Header/>
            <section className='add-operation'>
                <article className='add-operation-top'>
                    <Link className='add-operation-top-back' to={"/"}>
                        <RiArrowLeftLine/> Back
                    </Link>
                    <h1 className='add-operation-top-title'>
                        Create new operation
                    </h1>
                </article>
                <article className='add-operation-bottom'>
                    <form onSubmit={handleSubmit(onSubmit)} method='POST' >
                        <div className="form-group">
                            <input 
                                type="input" 
                                className="form-field" 
                                placeholder="Concept" 
                                name="concept" 
                                id='concept'
                                {...register("concept"
                                , { required: true })
                                } 
                                required 
                            />
                            <label 
                                htmlFor="concept" 
                                className="form-label"
                            >
                                Concept
                            </label>
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-field" 
                                placeholder="Amount" 
                                name="amount" 
                                id='amount' 
                                {...register("amount"
                                , { required: true })
                                } 
                                required 
                                pattern="[0-9]*"
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        swal('Only type numbers, please!')
                                        event.preventDefault();
                                    }
                                }}
                            />
                            <label 
                                htmlFor="amount" 
                                className="form-label"
                            >
                                Amount $
                            </label>
                        </div>

                        <div className="form-group">
                            <label className="toggle" htmlFor="typeOperation">
                                <input 
                                    className="toggle__input" 
                                    name="" 
                                    type="checkbox" 
                                    id="typeOperation"
                                    {...register("typeOperation")
                                    } 
                                />
                                <div className="toggle__fill">
                                    Income    -   Expense
                                </div>
                            </label>
                        </div>
                        <div className=' crudOperation'>
                            {/* <input 
                                type="submit" 
                                className="form-submit crudOperarion-button" 
                                // placeholder="Concept" 
                                name="name" 
                                id='name'
                                value='Create' 
                                required 
                            /> */}
                            <button onClick={(e)=>{
                                        // e.preventDefault();
                                        // register()
                                    }
                                } type="submit" className="crudOperation-button crudOperation-button-add">
                                Create
                                <IoIosAdd className="crudOperation-button-icon"/>
                            </button>
                            <button onClick={(e)=>{
                                        e.preventDefault();
                                        // example()
                                        cancel()
                                    }
                                } className="crudOperation-button crudOperation-button-cancel">
                                Cancel
                                <MdOutlineCancel className="crudOperation-button-icon"/> 
                            </button>
                            {/* <input 
                                type="button" 
                                className="form-cancel crudOperarion-button" 
                                // placeholder="Concept" 
                                name="name" 
                                id='name' 
                                value='Cancel' 
                                required 
                            /> */}
                        </div>
                    </form>
                </article>  
            </section>
            <Footer/>

        </main>
        )
}

export default AddOperation;