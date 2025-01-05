import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white rounded-lg">    
            <div className="mx-auto w-full max-w-screen-xl p-8 lg:py-10">
    	        <div className="md:flex md:justify-between">
    	            <div className="mb-6 md:mb-0">
    	                <Link to="/" className="flex items-center">
    	                    <span className="text-3xl font-title font-bold text-gray-200">TrendIntel</span>
    	                </Link>
    	                <p className="mt-2 text-gray-400">Empowering Ideas, Shaping Futures.</p>
    	            </div>
    	            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 text-gray-400">
    	                <div>
    	                    <h2 className="mb-6 text-sm font-semibold uppercase text-gray-200">Resources</h2>
    	                    <ul className="flex flex-col gap-3">
    	                        <li>
    	                            <Link to="/blog" className="hover:underline hover:text-gray-50">
    	                                Blog
    	                            </Link>
    	                        </li>
    	                        <li>
    	                            <Link to="/product" className="hover:underline hover:text-gray-50">
    	                                Product
    	                            </Link>
    	                        </li>
    	                    </ul>
    	                </div>
    	                <div>
    	                    <h2 className="mb-6 text-sm font-semibold uppercase text-gray-200">Follow us</h2>
    	                    <ul className="flex flex-col gap-3">
    	                        <li>
    	                            <Link to="#" className="hover:underline hover:text-gray-50">
    	                                Discord
    	                            </Link>
    	                        </li>
    	                        <li>
    	                            <Link to="#" className="hover:underline hover:text-gray-50">
    	                                Dribble
    	                            </Link>
    	                        </li>
    	                    </ul>
    	                </div>
    	                <div>
    	                    <h2 className="mb-6 text-sm font-semibold uppercase text-gray-200">Legal</h2>
    	                    <ul className="flex flex-col gap-3">
    	                        <li>
    	                            <Link to="#" className="hover:underline hover:text-gray-50">
    	                                Privacy Policy
    	                            </Link>
    	                        </li>
    	                        <li>
    	                            <Link to="#" className="hover:underline hover:text-gray-50">
    	                                Terms & Conditions
    	                            </Link>
    	                        </li>
    	                    </ul>
    	                </div>
    	            </div>
    	        </div>
    	        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
    	        <div className="sm:flex sm:items-center sm:justify-between">
    	            <span className="text-sm text-gray-400 sm:text-center">
    	                © 2024 Binary Beasts. All Rights Reserved.
    	            </span>
    	            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
    	                <Link to="#" className="text-gray-400 hover:text-gray-200">
    	                    <i className="fa-brands fa-linkedin-in"></i>
    	                </Link>
    	                <Link to="#" className="text-gray-400 hover:text-gray-200">
    	                    <i className="fa-brands fa-twitter"></i>
    	                </Link>
    	                <Link to="#" className="text-gray-400 hover:text-gray-200">
    	                    <i className="fa-brands fa-facebook"></i>
    	                </Link>
    	                <Link to="#" className="text-gray-400 hover:text-gray-200">
    	                    <i className="fa-brands fa-instagram"></i>
    	                </Link>
    	                <Link to="#" className="text-gray-400 hover:text-gray-200">
    	                    <i className="fa-brands fa-youtube"></i>
    	                </Link>
    	            </div>
    	        </div>
    	    </div>
    	</footer> 
    );
}