import React from 'react';
import { FaSortDown } from "react-icons/fa"
import Logo from "../../Assets/main.PNG"
import LoginModal from '../Login/LoginModal';
import SignUpModal from '../SIgnUpModal/SignUpModal';

const Navbar = () => {
    return (
        <div>
            <div className={`${"shadow-xl bg-white"}`}>
                <div className="navbar container mx-auto">
                    <div className="navbar-start">
                        <label htmlFor="my-drawer-2" className="btn bg-[#1E2772] hover:bg-[#222d94] btn-circle lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </label>

                        <a href='#_'>
                            <div className='flex gap-2 items-center'>
                                <img className='w-32 h-10 hidden md:block' alt="" src={Logo} />
                            </div>
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative w-96">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="default-search" className={`${"bg-gray-50"} block w-full p-3 pl-10 text-sm text-gray-900 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700`} placeholder="SEARCH" required />
                            </div>
                        </form>

                    </div>
                    <div className="navbar-end">

                        <div className="dropdown dropdown-end">
                            <label className='cursor-pointer' tabIndex={0}>
                                <p className='font-bold text-lg flex items-center gap-1'>
                                    Create account. <span className='text-[#2F6CE5]'>It’s free!</span>
                                    <span><FaSortDown className='mb-2' /></span>
                                </p>
                            </label>

                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><label htmlFor="my-modal-3">
                                    Sign Up
                                </label></li>
                                <li><label htmlFor="my-modal-4">
                                    Login
                                </label>
                                </li>
                            </ul>
                        </div>


                        <div className="ml-2 dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/people" alt='img' />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a href='#_' className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a href='#_'>Settings</a></li>
                                <li><a href='#_'>Logout</a></li>
                            </ul>
                        </div>
                        <div className='ml-2'>
                            <input type="checkbox" className="toggle" />
                        </div>

                    </div>
                </div>
            </div>


            <SignUpModal />
            <LoginModal />
        </div>
    );
};

export default Navbar;