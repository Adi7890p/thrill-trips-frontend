import React, { useEffect } from 'react'
import './header.css'
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import footer from '../assets/images/headermover.png'
import gsap from 'gsap';
import { Link, useNavigate } from 'react-router-dom';
import home from '../pages/Home';
import Explore from '../pages/Explore';
import Home from './../pages/Home';


const Header = (props) => {
    const navigate = useNavigate();



    useEffect(() => {


        gsap.fromTo("#nav", { y: '-100%' }, { y: '0%', duration: 1, delay: 0.5, ease: 'power2.out' });
        gsap.fromTo("#logo1", { y: '-100%' }, { y: '0%', duration: 1, delay: 0.5, ease: 'power2.out' });
        gsap.fromTo("#logo2", { y: '-100%' }, { y: '0%', duration: 1, delay: 0.5, ease: 'power2.out' });
        gsap.fromTo(".links a", { y: '-100%', opacity: 0 }, { y: '0%', delay: 0.5, opacity: 1, duration: 1, ease: 'power2.out', stagger: 0.2 });
        // gsap.fromTo("#footer", { y: '100%' }, { y: '0%', duration: 1,delay:0, ease: 'power2.out', delay: 1 });
        gsap.to("#footer1", { x: '100vw', duration: 10, ease: 'none', repeat: -1 });
        gsap.to("#footer2", { x: '100vw', duration: 10, ease: 'none', repeat: -1 });
        gsap.to("#footer3", { x: '100vw', duration: 10, ease: 'none', repeat: -1 });
        gsap.to("#footer4", { x: '100vw', duration: 10, ease: 'none', repeat: -1 });
        gsap.to("#footer5", { x: '100vw', duration: 10, ease: 'none', repeat: -1 });
    }, []);
    
    const userr = () => {
        navigate('/user');
    }

    return (
        <>
            <div className='header'>

                <nav id="nav">
                    <div className="logo">
                        <img src={logo2} alt="logo" id="logo2" />
                        <img src={logo1} onClick={

                            () => { navigate('/'); }} alt="logo" id="logo1" />

                    </div>
                    <div className="links">
                        <Link to="/about">About Us</Link>
                        <Link to="/explore">Explore</Link>

                        
                        {sessionStorage.getItem("username") ? <div style={{ fontFamily: 'bt' }} onClick={userr} className='capitalize border-2 -mt-5 border-dotted tracking-wider text-3xl bg-amber-500 px-3 py-0.5 rounded-full h-12' >{sessionStorage.getItem("username")[0]}</div> :
                            <Link to="/login">Login</Link>
                        }


                    </div>
                    <div className="footer">

                        <img src={footer} alt="footer" id="footer1" />
                        <img src={footer} alt="footer" id="footer2" />
                        <img src={footer} alt="footer" id="footer3" />
                        <img src={footer} alt="footer" id="footer4" />
                        <img src={footer} alt="footer" id="footer5" />
                    </div>
                </nav>

            </div>
            <div id="top-space"></div>
        </>
    )
}

export default Header
