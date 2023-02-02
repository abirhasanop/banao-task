import React from 'react';
import { MdGroupAdd } from "react-icons/md"
import { FaSortDown } from "react-icons/fa"
const Tabls = () => {
    return (
        <div className=''>
            <div className="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap dark:border-gray-700">
                <button className="inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none">
                    Profile
                </button>

                <button className="inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
                    Account
                </button>

                <button className="inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
                    Notification
                </button>

                <div className='flex gap-2 flex-1 justify-end items-center mb-2'>
                    <button className="flex gap-2 px-6 py-2 font-medium tracking-wide capitalize transition-colors duration-300 transform bg-[#EDEEF0] rounded-lg focus:outline-none">
                        Write a Post <FaSortDown className='text-lg' />
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none">
                        <MdGroupAdd className='text-lg' /> Join Group
                    </button>
                </div>
            </div>


        </div>
    );
};

export default Tabls;