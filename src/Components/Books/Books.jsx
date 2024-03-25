import React from 'react';
import useBooksData from '../Hooks/useBooksData';
import Book from '../Book/Book';

const Books = () => {
  
  const {books} = useBooksData();

    return (
        <div>
             <h1 className='text-5xl text-center font-bold my-8' >Books</h1>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
             {
               books.map(book => <Book key={book.id} book={book} ></Book>)
             }
        </div>
        </div>
    );
};

export default Books;