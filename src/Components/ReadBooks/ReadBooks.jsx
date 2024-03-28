import React, { useContext, useEffect, useState } from 'react';
import { getReadListFromLs } from '../../localStorage';
import ReadBooksCard from './ReadBooksCard';
import { SortingContext } from '../ListedBooks/ListedBooks';


const ReadBooks = () => {
   const {readSortCriteria} = useContext(SortingContext);


   const [readBooks, setReadBooks] = useState([]);

   useEffect(() => {
       const readList = getReadListFromLs() || [];
       if (readSortCriteria) {
           let sortedData = [...readList];
           if (readSortCriteria === 'rating' ) {
               sortedData.sort((a, b) => b.rating - a.rating); 
           } else if (readSortCriteria === 'totalPages') {
               sortedData.sort((a, b) => b.totalPages - a.totalPages); 
           } else if (readSortCriteria === 'yearOfPublishing') {
               sortedData.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing); 
           }
           setReadBooks(sortedData);
       } else {
          
           setReadBooks(readList);
       }
   }, [readSortCriteria]);
   




    // useEffect(()=> {
    //     const readList = getReadListFromLs() || [];
    //     setReadBooks(readList)
    // },[]);

  

    return (
       <div className='my-8' >
            {
                readBooks.map(readBook => <ReadBooksCard readBook={readBook} key={readBook.bookId}></ReadBooksCard>)
            }
       </div>
    );
};

export default ReadBooks;