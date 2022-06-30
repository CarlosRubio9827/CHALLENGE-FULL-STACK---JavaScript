import React from "react";
import {Link} from "react-router-dom";
import 'Styles/footer.scss';
import { FiTwitter, FiGithub } from 'react-icons/fi';

const Footer = ()=>{
    return (
        <footer className='footer'>
            <p className='footer-author'>
                Developed by
                {/* <Link target="_blank" to={'https://github.com/CarlosRubio9827'}> */}
                    <a target="_blank" href='https://github.com/CarlosRubio9827'>
                         <span> </span>Carlos Rubio
                    </a>
                {/* </Link> */}
                <span>2022</span>
            </p>
            <ul className="footer-social">
                <li>
                    {/* <Link target="_blank" to={'https://twitter.com/rubiogallegoc'}> */}
                        <a target="_blank" href="https://twitter.com/rubiogallegoc">
                            <FiTwitter className="footer-icon"/>
                        </a>
                    {/* </Link> */}
                </li>
                <li>
                    {/* <Link target="_blank" to={'https://github.com/CarlosRubio9827'}> */}
                        <a target="_blank" href="https://github.com/CarlosRubio9827" >
                            <FiGithub className="footer-icon"/>
                        </a>

                    {/* </Link> */}
                </li>
            </ul>

        </footer>  
    )
}    

export default Footer;