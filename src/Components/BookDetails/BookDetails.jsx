import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useBooksData from '../Hooks/useBooksData';


const BookDetails = () => {
    const {id} = useParams();
   const {books} = useBooksData()
   console.log(books)
 
    
    // const [currentBook, setCurrentBook] = useState();

    useEffect(() => {
        if(books) {
            const book = books.find(book => book.bookId == id);
            setCurrentBook(book)
        }
    },[])

  
   
  
      
      const { bookId, bookName, author, image,  tags, rating , category,totalPages,publisher,review} = currentBook;
   
   
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className='w-1/2' ><img src={image} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title"> {bookName} </h2>
          <p>{author}</p>
          <div className="border-t border-gray-400" style={{borderStyle: 'dotted'}}></div>
          <p>{category}</p>
          <div className="border-t border-gray-400" style={{borderStyle: 'dotted'}}></div>
          <p> <span className='font-bold'>Review</span> {review}</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;