import React, { useEffect, useState } from 'react';
import useBooksData from '../Hooks/useBooksData';
import { useParams } from 'react-router-dom';
import { saveToLocalStorage } from '../../localStorage';
useState
const BookDetail = () => {
    const {books} = useBooksData()
    const {id} = useParams();
    // console.log(id)

    const [currentBook, setCurrentBook] = useState();

    useEffect(() => {
        if(books) {
            const SingleBook = books.find(book => book.bookId == id);
            setCurrentBook(SingleBook)
        }
    },[books,id]) 
      const { bookId, bookName,yearOfPublishing, author, image,  tags, rating , category,totalPages,publisher,review} = currentBook || {}
  
      const handleReadLists = (book, value) => {
          saveToLocalStorage(book,value);
      }
      const handleWishLists = (book,value) => {
        saveToLocalStorage(book,value);
      }


    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-6 p-2 lg:p-0">
        <figure className=' w-full lg:w-1/2 ' ><img className='h-full rounded-xl' src={image} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title"> {bookName} </h2>
          <p> By: {author}</p>
          <div className="border-t border-gray-400" style={{borderStyle: 'dotted'}}></div>
          <p className='mt-2'>{category}</p>
          <div className="border-t border-gray-400" style={{borderStyle: 'dotted'}}></div>
          <p> <span className='font-bold'>Review</span> {review}</p>
         <div className='flex flex-row gap-6 items-center'>
            <span className='font-bold'>Tags: </span>
            {tags && Array.isArray(tags) && tags.map(tag => (
                <button key={tag.id} className='btn text-[#23BE0A]'>#{tag}</button>
            ))}
         </div>
         <div className="border-t border-gray-400" style={{borderStyle: 'dotted'}}></div>
          <p>Number of Pages: <span className='ml-10 font-bold'>{totalPages}</span> </p>
          <p> Publisher: <span className='ml-24 font-bold'>{publisher}</span> </p>
          <p>Year of Publishing: <span className='ml-8 font-bold'>{yearOfPublishing}</span> </p>
          <p>Rating <span className='ml-[119px] font-bold'>{totalPages}</span> </p>
        
          <div className="card-actions">

            <button onClick={()=> handleReadLists(currentBook, 0)} className="btn">Read</button>
            <button onClick={()=> handleWishLists(currentBook, 1)}  className="btn bg-[#23BE0A] text-white">Whishlist</button>
          </div>
        </div>
      </div>
    );
};

export default BookDetail;