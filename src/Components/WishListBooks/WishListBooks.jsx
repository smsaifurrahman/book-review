import React, { useContext, useEffect, useState } from 'react';
import { getWishListFromLs } from '../../localStorage';
import WishListCard from './WishListCard';
import { SortingContext } from '../ListedBooks/ListedBooks';



const WishListBooks = () => {
    const {wishSortCriteria} = useContext(SortingContext)

   
  
    const [wishBooks, setWishBooks] = useState([]);

    useEffect(()=> {
        const wishList = getWishListFromLs() || [];
        if(wishSortCriteria) {
            let  sortedData = [...wishList];
            if(wishSortCriteria === 'rating'  ) {
                sortedData.sort((a, b) => b.rating - a.rating);
            }else if(wishSortCriteria === "totalPages"  ){
                sortedData.sort((a,b) => b.totalPages - a.totalPages);
            }
            else if(wishSortCriteria === "yearOfPublishing" ){
                sortedData.sort((a,b) => b.yearOfPublishing - a.yearOfPublishing);
            }
            setWishBooks(sortedData)
        }
        else{
            setWishBooks(wishList)
        }
    },[wishSortCriteria])

    // useEffect(()=> {
    //     const wishList = getWishListFromLs() || [];
    //     setReadBooks(wishList)
    // },[]);

    return (
       <div className='my-8' >
            {
                wishBooks.map(wishBook => <WishListCard wishBook={wishBook} key={wishBook.bookId}></WishListCard>)
            }
       </div>
    );
};

export default WishListBooks;