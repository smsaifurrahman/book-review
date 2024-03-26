import React from 'react';
import { IoIosStarOutline } from 'react-icons/io';

const NewReleased = () => {
    return (
       <div>
        <h1 className='text-3xl font-bold flex flex-col items-center my-4'>These Books will be Released Soon</h1>
             <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <div className="card border-2 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src="https://i.ibb.co/jH80v5D/new.jpg" alt="Shoes" className="rounded-xl w-full h-60" />
        </figure>
        <div className="card-body">
            <div className='flex gap-5'>
                <button className='btn text-[#23BE0A]'>Fiction</button>
                <button className='btn text-[#23BE0A]'>Mystery</button>
                <button className='btn text-[#23BE0A]'>Adventure</button>
            </div>
            <h2 className="card-title text-xl mt-4 font-bold">A Man Who Came From Nowhere</h2>
            <p className='my-4'>By: Frances Hodgson Burnett</p>
            <div className="border-t border-gray-400" style={{ borderStyle: 'dotted' }}></div>

            <div className="card-actions flex justify-between items-center">
                Children's Literature
                <div className='flex items-center gap-2 '>
                    <p><span>4.2</span></p>
                    <IoIosStarOutline />
                </div>
            </div>
        </div>
    </div>
    <div className="card border-2 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src="https://i.ibb.co/JnbtDqg/images.jpg" alt="Shoes" className="rounded-xl w-full h-60" />
        </figure>
        <div className="card-body">
            <div className='flex gap-5'>
                <button className='btn text-[#23BE0A]'>Fiction</button>
                <button className='btn text-[#23BE0A]'>Mystery</button>
                <button className='btn text-[#23BE0A]'>Adventure</button>
            </div>
            <h2 className="card-title text-xl mt-4 font-bold">The Secret Garden</h2>
            <p className='my-4'>By: Frances Hodgson Burnett</p>
            <div className="border-t border-gray-400" style={{ borderStyle: 'dotted' }}></div>

            <div className="card-actions flex justify-between items-center">
                Children's Literature
                <div className='flex items-center gap-2 '>
                    <p><span>4.2</span></p>
                    <IoIosStarOutline />
                </div>
            </div>
        </div>
    </div>
    <div className="card border-2 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src="https://i.ibb.co/LNcQsMn/book-hardcover-mockup-three-views-125540-226.jpg" alt="Shoes" className="rounded-xl w-full h-60" />
        </figure>
        <div className="card-body">
            <div className='flex gap-5'>
                <button className='btn text-[#23BE0A]'>Fiction</button>
                <button className='btn text-[#23BE0A]'>Mystery</button>
                <button className='btn text-[#23BE0A]'>Adventure</button>
            </div>
            <h2 className="card-title text-xl mt-4 font-bold">The Arts of Richness</h2>
            <p className='my-4'>By: Frances Hodgson Burnett</p>
            <div className="border-t border-gray-400" style={{ borderStyle: 'dotted' }}></div>

            <div className="card-actions flex justify-between items-center">
                Children's Literature
                <div className='flex items-center gap-2 '>
                    <p><span>4.2</span></p>
                    <IoIosStarOutline />
                </div>
            </div>
        </div>
    </div>
        </div>
       </div>
    );
};

export default NewReleased;