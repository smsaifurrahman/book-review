import React, { createContext, useState } from 'react';
import { getReadListFromLs, getWishListFromLs } from '../../localStorage';
import { Link, Outlet } from 'react-router-dom';
import ReadBooks from '../ReadBooks/ReadBooks';
import WishListBooks from '../WishListBooks/WishListBooks';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


export const SortingContext = createContext();


const ListedBooks = () => {

    const [tabIndex, setTabIndex] = useState(0);


    
    
    const [readSortCriteria, setReadSortCriteria] = useState('') ;
    const [wishSortCriteria, SetWishSortCriteria] = useState('')

    const handleSortCriteria = (criteria,tab) => {
        if(criteria && tab ===0) {
            setReadSortCriteria(criteria);
        }
        else if(criteria && tab ===1 ) {
            SetWishSortCriteria(criteria);
        }
     

    }
    const sortingContextValue = {readSortCriteria, wishSortCriteria};
    // console.log(sortCriteria);


    return (
       <SortingContext.Provider value={sortingContextValue}>
                 <div >
            <h1 className='text-3xl lg:text-5xl font-bold   lg:mx-0 text-center py-3 m-2 lg:mt-4 lg:py-6 bg-gray-100 rounded-xl'>Books</h1>
            {/* This is dropDown Menu */}
            <div className='flex flex-col justify-center items-center  my-8'>
            <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn m-1 bg-green-500 text-white font-bold"
                
                >Sort By <MdOutlineKeyboardArrowDown className='font-bold text-3xl' /> </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
               
                >
                <li onClick={()=> handleSortCriteria('rating',tabIndex)} >
                   <a>Rating</a>
               </li>

                  <li onClick={()=> handleSortCriteria('totalPages',tabIndex)}><a>Number of Pages</a></li>
                  <li onClick={()=> handleSortCriteria('yearOfPublishing',tabIndex)}><a>Publish year</a></li>
               
                </ul>
                </div>
            </div>
            {/* This Tab  */}
            
           

            <div className="flex items-center mx-0 lg:mx-0 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
            <Link to={'/listed-books'} onClick={()=> setTabIndex(0)}
                 rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 flex-grow-0 lg:flex-grow-1 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} dark:border-gray-600 dark:text-gray-600`}>
                            <span>Read Books</span>
               
            </Link>
            <Link to={'/listed-books/wish-list'} onClick={()=> setTabIndex(1)}
                 rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 lg:flex-grow  space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} dark:border-gray-600 dark:text-gray-600`}>
                            <span>WishLists Books</span>
               
            </Link>
            </div> 

            


          <div className='mx-2 lg:mx-0'>
                <Outlet ></Outlet>
          </div>
          
       

       
        </div>
       </SortingContext.Provider>
    );
};

export default ListedBooks;