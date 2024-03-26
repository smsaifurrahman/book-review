import React from 'react';
import { getReadListFromLs, getWishListFromLs } from '../../localStorage';

const ListedBooks = () => {

    const whishList = getWishListFromLs() || [];
    const readList = getReadListFromLs() || [];




    return (
        <div>
           wishList {whishList.length} <br />
           ReadList {readList.length}
        </div>
    );
};

export default ListedBooks;