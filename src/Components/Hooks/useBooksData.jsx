import React, { useEffect, useState } from 'react';

const useBooksData = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState()

    useEffect( ()=> {
        const fetchData = async () => {
            setLoading(true)
            const res = await fetch('/data.json');
            const data = await res.json();
            setBooks(data);
            setLoading(false);
        }

        fetchData();
    },[])
    
    // console.log(books)

    return ({books,loading});
        
    
};

export default useBooksData;