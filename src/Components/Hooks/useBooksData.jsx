import React, { useEffect, useState } from 'react';

const useBooksData = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=> {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setBooks(data));

    },[])
    console.log(books)

    return {books}
        
    
};

export default useBooksData;