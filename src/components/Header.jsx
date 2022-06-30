import React from "react";
import 'Styles/header.scss';

const Header = ()=>{
    return (
        <header className='header'>
            <figure className='header-figure'>
                <img  className='header-figure-img' src='https://images.typeform.com/images/P8epSxjtv3x4/image/default'/>
            </figure>
            <h1 className='header-title'>
                CHALLENGE FULL STACK - JavaScript 🚀
            </h1>
        </header>  
    )
}    

export default Header;