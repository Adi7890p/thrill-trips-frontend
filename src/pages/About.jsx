import React from 'react'
import Header from '../components/Header'
import { Goal, Telescope, TicketCheck, ShieldCheck, MapPinHouse,TicketPlus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ferisimg from "../assets/images/feris.png";


const About = () => {
    const navigate = useNavigate();
    return (
        <div >
            <Header />
            <div className='w-full h-full px-3 flex justify-center'>
                <div className='bg-blue-100 -mt-20 w-[95%] rounded-2xl mb-4  h-full'>
                    <img src={ferisimg} className=' rounded-t-2xl' alt="" />
                    <h1 className='text-white absolute top-[20%] w-[80%] text-8xl left-1/13'>Welcome to ThrillTrips Where Every Ride is an Adventure!
                    </h1>
                    <h5 className='text-white absolute top-[73%] w-[85%] text-2xl left-1/13'>Your gateway to the world’s most exciting amusement and adventure parks. We make your next thrill easy to book and impossible to forget.
                    </h5>
                    <button onClick={()=>navigate('/explore')} style={{ fontFamily: 'mouldy' }} className='text-white font-medium absolute top-[86%] text-2xl px-5 py-2 pt-3 mt-2 tracking-wide bg-amber-400 rounded-2xl hover:bg-blue-400 transition-all duration-300 left-1/13'>
                        Explore Now
                    </button>
                    <h3 className='text-[#05284C] m-4 mx-5'>Mission & Vision</h3>
                    <div className='flex w-full px-5 justify-evenly'>
                        <div className='flex justify-evenly p-2 rounded-2xl items-center bg-amber-500 hover:bg-amber-400 transition-all duration-300 w-[35vw] h-[35vh]'>
                            <Goal className='text-white m-t-10 h-full ' size={100} strokeWidth={2.5} />
                            <div className='text-center w-1/2'>
                                <h5 className='text-[#05284C] text-3xl font-extrabold' style={{ fontFamily: 'bt' }}>MISSION</h5>
                                <p className='text-white'>To make adventure travel simple, affordable, and unforgettable by connecting thrill-seekers to the best parks worldwide.</p>
                            </div>
                        </div>
                        <div className='flex justify-evenly p-2 rounded-2xl items-center hover:bg-amber-400 transition-all duration-300 bg-amber-500 w-[35vw] h-[35vh]'>
                            <Telescope className='text-white h-full ' size={100} strokeWidth={2.5} />

                            <div className='text-center w-1/2'>
                                <h5 className='text-[#05284C] text-3xl font-extrabold' style={{ fontFamily: 'bt' }}>VISION</h5>

                                <p className='text-white'>To be the #1 digital hub for amusement and adventure park experiences, from local gems to global icons.</p>
                                <br />
                            </div>
                        </div>

                    </div>
                    <h3 className='text-[#05284C] mx-5 m-4'>Our Story</h3>
                    <p className='text-[#05284C] [word-spacing:4px] text-lg w-[85vw] leading-8 m-4 mx-5 tracking-wide' style={{ fontFamily: 'titlef' }}>ThrillTrips was born out of a shared passion for adrenaline and discovery. We noticed how difficult it was to plan trips to parks like Imagicaa, Wonderla, Disneyland Paris, or Ferrari World — and decided to fix that. Today, ThrillTrips connects park lovers across continents with seamless booking, curated experiences, and honest information.</p>

                    <h3 className='text-[#05284C] m-4 mx-5'>What We Offer</h3>

                    <div className='flex  w-full px-5 gap-2 justify-evenly'>
                        <div className='w-1/4 hover:bg-amber-400 transition-all duration-300 flex flex-col items-center p-3 text-white bg-blue-500 rounded-2xl'>
                            <TicketCheck size={100} strokeWidth={2.5} />
                            <h5 className='text-white tracking-wide text-2xl underline-offset-6 underline font-extrabold' style={{ fontFamily: 'titlef' }}>Easy Park Booking</h5>
                            <p>We provide a seamless
                                booking experience for an
                                wide range of amusement
                                and adventure parks.</p>
                        </div>
                        <div className='w-1/4 hover:bg-amber-400 transition-all duration-300 flex flex-col items-center p-3 text-white bg-blue-500 rounded-2xl'>
                            <ShieldCheck size={100} strokeWidth={2.5} />
                            <h5 className='text-white tracking-wide text-2xl underline-offset-6 underline font-extrabold' style={{ fontFamily: 'titlef' }}>Secure Payments</h5>
                            <p>We ensure your payments
                                are safe and encrypted,
                                offering multiple payment
                                options.</p>
                        </div>
                        <div className='w-1/4 hover:bg-amber-400 transition-all duration-300 flex flex-col items-center p-3 text-white bg-blue-500 rounded-2xl'>
                            <MapPinHouse size={100} strokeWidth={2.5} />
                            <h5 className='text-white  text-center tracking-wide text-2xl underline-offset-6 underline font-extrabold' style={{ fontFamily: 'titlef' }}>Multi City Thrill</h5>
                            <p>Plan trips to parks in
                                multiple cities with ease,
                                with our flexible booking
                                options.</p>
                        </div>
                        <div className='w-1/4 flex hover:bg-amber-400 transition-all duration-500 flex-col items-center p-3 text-white bg-blue-500 rounded-2xl'>
                            <TicketPlus size={100} strokeWidth={2.5} />
                            <h5 className='text-white  text-center tracking-wide text-2xl underline-offset-6 underline font-extrabold' style={{ fontFamily: 'titlef' }}>Exclusive Add-Ons</h5>
                            <p>Upgrade your experience with meal combos, express entry, and locker passes—all managed by us.</p>
                        </div>
                        
                    
                   
                    </div>
                     <div className='mt-5 bg-amber-600 text-white p-4 flex justify-center rounded-b-2xl '>Copyright © 2025 ThrillTrips. All rights reserved & Managed By Aditya Kuril & Neel Kanani.</div>

                </div>
            </div>
        </div>
    )
}

export default About
