import React from 'react';
import { FaShareAlt } from 'react-icons/fa'
import { TfiEye } from "react-icons/tfi"
import { RiCalendarEventFill } from "react-icons/ri"
import { GoLocation } from "react-icons/go"

const PostCard = ({ news }) => {
    const { img, newsType, title, description, authorName, authorImage, extra, varient } = news
    return (
        <div className='my-5'>
            <div className="max-w-4xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img className="object-cover w-full h-64" src={img} alt="Article" />

                <div className="p-6">
                    <div>
                        <span className=" font-semibold uppercase dark:text-blue-400">{newsType}</span>

                        <div className='flex justify-between items-center'>
                            <h1 className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" >{title}</h1>


                            <div className='dropdown dropdown-end'>
                                <label tabIndex={0} className="cursor-pointer relative z-10 block p-2 transition-colors duration-300 transform rounded-lg hover:bg-gray-200 focus:outline-none focus:bg-[#BFBFC0]">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>
                                </label>

                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Edit</a></li>
                                    <li><a>Report</a></li>
                                    <li><a>Option 3</a></li>
                                </ul>
                            </div>
                        </div>

                        {
                            extra ?
                                <>
                                    <div className='flex justify-between w-1/2 my-3'>
                                        <p className='flex font-semibold items-center gap-1'>
                                            <span><RiCalendarEventFill /></span>
                                            Fri, 12 Oct, 2018
                                        </p>

                                        <p className='flex font-semibold items-center gap-1'>
                                            <span><GoLocation /></span>
                                            Ahmedabad, India
                                        </p>
                                    </div>

                                    <button className={`btn btn-outline  ${varient === 1 ? "btn-error " : "btn-success"} w-full`}>
                                        {varient === 1 ? "Visit Website" : "Apply on Timesjobs"}
                                    </button>
                                </>
                                : <>
                                    <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
                                </>
                        }


                    </div>

                    <div className="mt-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <img className="object-cover w-10 h-10 rounded-full" src={authorImage} alt="Avatar" />
                                <h1 className="mx-2 font-semibold text-gray-700 dark:text-gray-200">{authorName}</h1>
                            </div>

                            <div className='flex items-center gap-8'>
                                <p className='font-semibold text-lg flex items-center gap-2'>
                                    <TfiEye />
                                    1.4k views
                                </p>
                                <p className='bg-[#EDEEF0] p-[0.75rem] rounded-md cursor-pointer hover:bg-[#BFBFC0]'>
                                    <FaShareAlt className='' />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;