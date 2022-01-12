import React , { useContext} from 'react';
import * as actions from '../../context/Actions'
import { Context } from '../../context/Context'
import "./topBar.css";
import {
    Link,
  } from "react-router-dom";
  

const TopBar = () => {
    const { user , dispatch } = useContext(Context);
    const logoutHandler = () => {
        dispatch({type:actions.Logout})
    }
    return (
        <div className="devo-header mb-70">
            <div className="devo-toolbar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="contact-toolbar">
                                <ul>
                                    <li><a href="mailto:needemail@gmail.com" className="color-black"> <i className="fas fa-envelope color-pink"></i> needemail@gmail.com </a></li>
                                    <li><a href="tel:012648588784" className="color-black"> <i className="fas fa-phone-volume color-pink"></i> 012648588784  </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="devo-social social-toolbar">
                                <ul>
                                    <li>
                                        <a href="#" className="color-pink color-borderPink">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="color-pink color-borderPink">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="color-pink color-borderPink">
                                            <i className="fab fa-behance"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="color-pink color-borderPink">
                                            <i className="fab fa-tumblr"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="devo-menu">
                <div className="container">
                    <div className="menu-container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-6">
                                <div className="logo-box">
                                    <Link to="/" >
                                        <img src="/images/Logo.png" className="img-fluid" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-9 col-6">
                                <div className="overlay-menu"></div>
                                <div className="main-menu">
                                    <div className="menu-box menu-links">
                                        <ul className="menu">
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
                                            <li className="logoutClass-topBar" onClick={logoutHandler}>
                                                logout
                                            </li>
                                            ) : null
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="menu-mob bg-pink">
                                    <i className="fas fa-times devo-exit color-black"></i>
                                    <div className="menu-box menu-links">
                                        <ul className="menu">
                                            <li>
                                                <Link to="/">
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/Login">
                                                    Login
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/Register">
                                                    Register
                                                </Link>
                                            </li>
                                            {
                                            user ? (
                                            <li className="logoutClass-topBar">
                                                logout
                                            </li>
                                            ) : null
                                            }
                                        </ul>
                                    </div>
                                    <div className="contact-toolbar">
                                        <ul>
                                            <li>
                                                <a className="color-white" href="mailto:needemail@gmail.com"> 
                                                    <i className="color-white fas fa-envelope"></i>
                                                        needemail@gmail.com 
                                                </a>
                                            </li>
                                            <li>
                                                <a className="color-white" href="tel:012648588784">
                                                    <i className="color-white fas fa-phone-volume"></i>
                                                    012648588784
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="social-toolbar devo-social">
                                        <ul>
                                            <li>
                                                <a href="#" className="color-white color-borderWhite">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="color-white color-borderWhite">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="color-white color-borderWhite"><i className="fab fa-behance"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="color-white color-borderWhite">
                                                    <i className="fab fa-tumblr"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bar-box">
                                    <i className="fas fa-bars color-black"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;