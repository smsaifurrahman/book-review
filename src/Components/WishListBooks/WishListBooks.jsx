import React, { useEffect, useState } from 'react';
import { getWishListFromLs } from '../../localStorage';
import WishListCard from './WishListCard';



const WishListBooks = () => {
    const [wishBooks, setReadBooks] = useState([]);

    useEffect(()=> {
        const wishList = getWishListFromLs() || [];
        setReadBooks(wishList)
    },[]);

    return (
       <div className='my-8' >
            {
                wishBooks.map(wishBook => <WishListCard wishBook={wishBook} key={wishBook.bookId}></WishListCard>)
            }
       </div>
    );
};

export default WishListBooks;