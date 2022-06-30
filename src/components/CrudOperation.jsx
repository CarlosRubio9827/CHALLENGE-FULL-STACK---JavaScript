import React from 'react';
import 'Styles/crudOperation.scss';
import {Link} from 'react-router-dom'
import { IoMdCreate } from 'react-icons/io';
import { BiShowAlt } from 'react-icons/bi';

const CrudOperation = ()=>{
    return (
        <article className='crudOperation'>
            <Link className='crudOperation-button crudOperation-new' to={'/addOperation'}>
                New
                <IoMdCreate className='crudOperation-button-icon'/> 
            </Link>
            <Link className='crudOperation-button crudOperation-show' to={'/'}>
                Show All
                <BiShowAlt className='crudOperation-button-icon'/>
            </Link>

        </article>
        )
}

export default CrudOperation;