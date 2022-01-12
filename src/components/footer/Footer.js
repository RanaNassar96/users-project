import React , { useContext } from 'react';
import * as actions from '../../context/Actions'
import { Context } from '../../context/Context'
import './footer.css';
import { Link } from "react-router-dom";


const Footer = () => {
    const { user , dispatch } = useContext(Context);
    const logoutHandler = () => {
        dispatch({type:actions.Logout})
    }
    return (
        <div className="footer-container">
            <footer id="colophon" className="site-footer">
                <div className="devo-footer mt-70 bg-pink">
                    <div className="footer-content pd-40">
                        <div className="container">
                            <div className="row">
                               <div className="col-md-12">
                                   <div className="footer-logo">
                                        <Link to="/" >
                                           <img src="/images/Logofooter.svg" className="img-fluid" />
                                        </Link>
                                   </div>
                                   <div className="footer-menu menu-links">
                                        <ul>
                                            <li>
                                                <Link to="/" >
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/Login" >
                                                    Login
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/Register" >
                                                    Register
                                                </Link>
                                            </li>
                                            {
                                            user ? (
                                            <li className="logoutClass-footer" onClick={logoutHandler}>
                                                logout
                                            </li>
                                            ) : null
                                            }
                                        </ul>
                                   </div>
                                   <div className="devo-social social-footer">
                                        <ul>
                                            <li><a href="#" className="color-pink color-borderWhite devo-bg-white"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#" className="color-pink color-borderWhite devo-bg-white"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#" className="color-pink color-borderWhite devo-bg-white"><i className="fab fa-behance"></i></a></li>
                                            <li><a href="#" className="color-pink color-borderWhite devo-bg-white"><i className="fab fa-tumblr"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="devo-copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="copyright-box">
                                        <p className="parag copyright-p color-white"> © All copyrights reserved to <a className="color-white" href="#" target="_blank">Devolum</a> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;