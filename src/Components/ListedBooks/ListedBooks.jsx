import React, { useState } from 'react';
import { getReadListFromLs, getWishListFromLs } from '../../localStorage';
import { Link, Outlet } from 'react-router-dom';
import ReadBooks from '../ReadBooks/ReadBooks';
import WishListBooks from '../WishListBooks/WishListBooks';

const ListedBooks = () => {

    const [tabIndex, setTabIndex] = useState(0);


    return (
        <div>
            <h1 className='text-3xl lg:text-5xl font-bold text-center py-3 m-2 lg:mt-4 lg:py-6 bg-gray-100 rounded-xl'>Books</h1>
            {/* This is dropDown Menu */}
            <div className='flex flex-col justify-center items-center  my-8'>
            <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn m-1 bg-green-500 text-white font-bold">Sort By</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
                </div>
            </div>
            {/* This Tab  */}
            
           

            <div className="flex items-center  -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
            <Link to={'/listed-books'} onClick={()=> setTabIndex(0)}
                 rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 flex-grow-1 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} dark:border-gray-600 dark:text-gray-600`}>
                            <span>Read Books</span>
               
            </Link>
            <Link to={'/listed-books/wish-list'} onClick={()=> setTabIndex(1)}
                 rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 flex-grow  space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} dark:border-gray-600 dark:text-gray-600`}>
                            <span>WishLists Books</span>
               
            </Link>
            </div> 
            


            <Outlet>
                <ReadBooks></ReadBooks>
                <WishListBooks></WishListBooks>
            </Outlet>

       
        </div>
    );
};

export default ListedBooks;