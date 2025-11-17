import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className='bg-thprim w-full'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr_1fr] gap-14 my-1 mt-40 text-sm max-w-8xl mx-auto px-10 py-10'>
                {/* Left Section - About CareConnect*/}
                <div>
                    <img onClick={() => { navigate('/'); scrollTo(0, 0) }} className='mb-5 w-40 cursor-pointer' src={assets.logo2} alt="" />
                    <p className='w-full md:w-4/5 text-gray-600 leading-6 text-left md:text-justify'>
                        CareConnect is a smart and seamless doctor appointment booking platform that connects patients with healthcare providers effortlessly.
                        Whether you need an in-person visit or a secure video consultation, CareConnect ensures quick bookings, hassle-free payments, and real-time availability.
                        <br /><span className='text-gray-800 font-medium'>Your health, our priority!</span>
                    </p>
                </div>

                {/* Middle Section - Company */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li className='hover:underline cursor-pointer' onClick={() => { navigate('/'); scrollTo(0, 0) }}>Home</li>
                        <li className='hover:underline cursor-pointer' onClick={() => { navigate('/about'); scrollTo(0, 0) }}>About</li>
                        <li className='hover:underline cursor-pointer' onClick={() => { navigate('/contact'); scrollTo(0, 0) }}>Contact Us</li>
                        <li className='hover:underline cursor-pointer' onClick={() => { navigate('/privacy'); scrollTo(0, 0) }}>Privacy Policy</li>
                        <li className='hover:underline cursor-pointer' onClick={() => { navigate('/termsconditions'); scrollTo(0, 0) }}>Terms & Conditions</li>
                    </ul>
                </div>

                {/* Middle Section - Get in Touch */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>
                            <a href="tel:0732754111" className="hover:text-primary">0732754111</a>
                        </li>
                        <li>
                            <a href="mailto:sekashalom74@gmail.com" className="hover:text-primary">
                                sekashalom74@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Right Section - Social Media Section */}
                <div>
                    <p className='text-xl font-medium mb-5'>FOLLOW US</p>
                    <div className="flex gap-4 text-gray-600 text-lg">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="w-full">
                <hr className="border-gray-300" />
                <p className='py-5 text-sm text-center text-gray-700'>
                    Copyright &copy; 2025, CareConnect - All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer;
