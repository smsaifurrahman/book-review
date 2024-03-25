import React from 'react';
import { IoIosStarOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

const Book = ({book}) => {

    const {bookId, bookName, author, image, review, tags, rating , category} = book

    return (
      <Link>
         
         <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
            <img  src={image} alt="Shoes" className=" rounded-xl w-full h-60 " />
            </figure>
            <div className="card-body ">
               <div className='flex gap-5'>
                    {
                        tags.map(tag => <button key={tag.id} className='btn text-[#23BE0A]'> {tag} </button> )
                    }
                </div> 
              <h2 className="card-title text-xl mt-4 font-bold"> {bookName} </h2>
              <p className='my-4'> By: {author}</p>
              <div className="border-t border-gray-400" style={{borderStyle: 'dotted'}}></div>


            <div className="card-actions flex justify-between items-center">
                {category}
                <div className='flex items-center gap-2 '>
                    <p> <span>{rating}</span>  </p>
                    <IoIosStarOutline />
                </div>

            </div>
            </div>
       </div>
      
      </Link>
    );
};

export default Book;