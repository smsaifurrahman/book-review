import React from 'react';

import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineRestorePage } from "react-icons/md";


const WishListCard = ({wishBook}) => {
    const { bookId, bookName,yearOfPublishing, author, image,  tags, rating , category,publisher,review, totalPages} = wishBook || {}
    return (
       
    
            <div className="card  card-side bg-base-100 border-2 py-1 lg:py-0 px-0 lg:px-6 mb-4">
                <figure className=' w-48 lg:w-1/4  rounded-xl'><img className='w-full h-52 lg:h-auto ' src={image} alt="Movie"/></figure>
                <div className="card-body w-1/2 ">
                    <h2 className="card-title"> {bookName} </h2>
                    <p> By: {author}</p>
                    {/* Tags container */}
                    <div className=' flex-wrap lg:flex items-center my-0 lg:my-3 gap-2 lg:gap-10'>
                        <div className=' flex flex-col lg:flex-row gap-2 lg:gap-6 items-center'>
                            <span className='font-bold'>Tags: </span>
                            {tags && Array.isArray(tags) && tags.map(tag => (
                                <button key={tag.id} className='btn text-[#23BE0A]'>#{tag}</button>
                            ))}
                        </div>
                        <div className='flex gap-3 items-center'>
                         <CiLocationOn />
                         <p>Year of Publishing: <span>{yearOfPublishing}</span> </p>
    
                        </div>
                     
                    </div>
                    {/* Publisher Namee */}
                    <div className=' flex-wrap -mt-4 lg:mt-0 lg:flex items-center gap-1 lg:gap-6'>
                        <div className=' flex items-center gap-2'>
                            <IoPeopleOutline />
                            <p>Publisher: <span>{publisher}</span> </p>
    
                        </div>
                        <div className=' flex items-center gap-2'>
                            <MdOutlineRestorePage />
                            <p>Pages: {totalPages} </p>
    
                        </div>
                    </div>
                    <div className="border-t border-gray-400" style={{borderStyle: 'dotted'}}></div>
    
                    <div className="">
                   
                    <button type="button" className="px-8 btn bg-[#c1d3e9] py-3 font-semibold text-[#1c3655] rounded-full dark:bg-gray-800 dark:text-gray-100">Category: {category}</button>
                    <button type="button" className="px-8 btn bg-[#FFAC3326] py-3 text-orange-500 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100">Rating: {rating} </button>
                    <button type="button" className="px-8 btn bg-[#23BE0A] py-3 font-semibold rounded-full dark:bg-gray-800 text-white dark:text-gray-100">View Details</button>
                    </div>
                </div>
            </div>
    );
};

export default WishListCard;