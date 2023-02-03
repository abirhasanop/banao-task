import React, { useContext, useEffect, useState } from 'react';
import { FaPen } from "react-icons/fa"
import { IoLocationOutline } from "react-icons/io5"
import { FiAlertCircle } from 'react-icons/fi'
import { AuthContext } from '../../Contexts/AuthProvider';

const Aside = () => {
    const { user } = useContext(AuthContext)

    const [follow1, setFollow1] = useState(true)
    const [follow2, setFollow2] = useState(true)
    const [follow3, setFollow3] = useState(true)
    const [follow4, setFollow4] = useState(true)



    console.log(follow1);

    return (

        <div>
            <div className="relative w-80 mx-auto">
                <span className="absolute left-0 top-0 mt-2 ml-2">
                    <IoLocationOutline className='text-xl mt-1' />
                </span>
                <input
                    type="text"
                    className={`${user || "cursor-not-allowed"} w-full px-3 pl-8 py-2 border-b-[1px] border-gray-400 outline-none focus:border-blue-500 text-black text-lg`}
                    placeholder='Noida, India'
                    disabled={!user}
                />
                <span className="absolute right-0  mt-2 mr-2">
                    <FaPen className='' />
                </span>
            </div>


            <div className='mt-10 w-[21rem]'>
                <p className='text-lg text-gray-400 flex gap-1'>
                    <span className='mt-[0.35rem]'><FiAlertCircle /></span>
                    Your location will help us serve better and extend a personalised experience.
                </p>
            </div>



            {
                user &&
                <section className='mt-16'>
                    <h2 className='text-xl uppercase'>{"👍"} Recommended Groups</h2>

                    <div className="flex justify-between items-center my-4">
                        <div className="flex items-center">
                            <img className="object-cover w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDGKIUcuZz_W01bUi5UjT5Iabmwbn8FAGeZ16l_UbFpfrgtjxDb0_TcRPGHiV-8o7F-As&usqp=CAU" alt="Avatar" />
                            <h1 className="mx-2 font-semibold text-gray-700 dark:text-gray-200">Leisure</h1>
                        </div>

                        <div className='flex items-center gap-8'>
                            {
                                follow1 ?
                                    <>
                                        <button
                                            onClick={() => setFollow1(!follow1)}
                                            className='btn btn-sm bg-[#EDEEF0] border-none text-black hover:bg-[#BFBFC0]'>
                                            Follow
                                        </button>
                                    </>
                                    : <>
                                        <button
                                            onClick={() => setFollow1(!follow1)}
                                            className='btn btn-sm bg-gray-900 border-none text-white hover:bg-[#1f1f27]'>
                                            Followed
                                        </button>
                                    </>
                            }
                        </div>
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <div className="flex items-center">
                            <img className="object-cover w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJA-U9AkzUF1iqBCQFhqe9pXjZr3uhajD0Zw&usqp=CAU" alt="Avatar" />
                            <h1 className="mx-2 font-semibold text-gray-700 dark:text-gray-200">Activism</h1>
                        </div>

                        <div className='flex items-center gap-8'>
                            {
                                follow2 ?
                                    <>
                                        <button
                                            onClick={() => setFollow2(!follow2)}
                                            className='btn btn-sm bg-[#EDEEF0] border-none text-black hover:bg-[#BFBFC0]'>
                                            Follow
                                        </button>
                                    </>
                                    : <>
                                        <button
                                            onClick={() => setFollow2(!follow2)}
                                            className='btn btn-sm bg-gray-900 border-none text-white hover:bg-[#1f1f27]'>
                                            Followed
                                        </button>
                                    </>
                            }
                        </div>
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <div className="flex items-center">
                            <img className="object-cover w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvNUAv-Ogc0SJqlXlhOoWHT3sGOc5BFO0hxQ&usqp=CAU" alt="Avatar" />
                            <h1 className="mx-2 font-semibold text-gray-700 dark:text-gray-200">MBA</h1>
                        </div>

                        <div className='flex items-center gap-8'>
                            {
                                follow3 ?
                                    <>
                                        <button
                                            onClick={() => setFollow3(!follow3)}
                                            className='btn btn-sm bg-[#EDEEF0] border-none text-black hover:bg-[#BFBFC0]'>
                                            Follow
                                        </button>
                                    </>
                                    : <>
                                        <button
                                            onClick={() => setFollow3(!follow3)}
                                            className='btn btn-sm bg-gray-900 border-none text-white hover:bg-[#1f1f27]'>
                                            Followed
                                        </button>
                                    </>
                            }
                        </div>
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <div className="flex items-center">
                            <img className="object-cover w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsooAls2JDy0Bm13yCYgZd5LL1CJf-TQYOuw&usqp=CAU" alt="Avatar" />
                            <h1 className="mx-2 font-semibold text-gray-700 dark:text-gray-200">Philosophy</h1>
                        </div>

                        <div className='flex items-center gap-8'>
                            {
                                follow4 ?
                                    <>
                                        <button
                                            onClick={() => setFollow4(!follow4)}
                                            className='btn btn-sm bg-[#EDEEF0] border-none text-black hover:bg-[#BFBFC0]'>
                                            Follow
                                        </button>
                                    </>
                                    : <>
                                        <button
                                            onClick={() => setFollow4(!follow4)}
                                            className='btn btn-sm bg-gray-900 border-none text-white hover:bg-[#1f1f27]'>
                                            Followed
                                        </button>
                                    </>
                            }
                        </div>
                    </div>


                    <div className='flex justify-end text-blue-500 text-base mt-9'>
                        <p className='cursor-pointer'>
                            See more...
                        </p>
                    </div>
                </section>
            }


        </div>
    );
};

export default Aside;