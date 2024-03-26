import React, { useEffect, useState } from 'react';
import { getReadListFromLs } from '../../localStorage';
import ReadBooksCard from './ReadBooksCard';

const ReadBooks = () => {
    

    const [readBooks, setReadBooks] = useState([]);

    useEffect(()=> {
        const readList = getReadListFromLs() || [];
        setReadBooks(readList)
    },[]);

  

    return (
       <div className='my-8' >
            {
                readBooks.map(readBook => <ReadBooksCard readBook={readBook} key={readBook.bookId}></ReadBooksCard>)
            }
       </div>
    );
};

export default ReadBooks;