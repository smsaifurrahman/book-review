import { toast } from "react-toastify";

export const saveToLocalStorage = (data, value) => {
    // let savedDataInRead;
    if(value ==0) {
       const  savedDataInRead = JSON.parse(localStorage.getItem('readList')) || [];
        const exitedData = savedDataInRead.find(item => item.bookId === data.bookId);
        console.log(typeof data.bookId)

          
    if(!exitedData) {
        savedDataInRead.push(data)
        localStorage.setItem('readList', JSON.stringify(savedDataInRead));
        toast.success('The Book is Added to the Read list')
    }
    else {
        // alert('Read already exits')
       return toast.warn('You Already Read the Book')
    }
    }
    else if (value ==1 ) {
        const  savedDataInRead = JSON.parse(localStorage.getItem('readList')) || [];
        const existInReadList = savedDataInRead.find(item => item.bookId == data.bookId);
        if(existInReadList) {
            // return alert('You have already read the book')
            return toast.warn('You Already Read the Book')
         }
        
        const savedData = JSON.parse(localStorage.getItem('wishList')) || [];
        const exitedData = savedData.find(item => item.bookId == data.bookId);

        if(!exitedData) {
            savedData.push(data)
            localStorage.setItem('wishList', JSON.stringify(savedData));
            toast.success('Book is Added to Wish list')

        }
        else {
            return toast.warn('Book has been added to wish list already')
        }
    }
   
} 




export const getReadListFromLs = () => {
    const data = JSON.parse(localStorage.getItem('readList')) || [];
    return data;
}

export const getWishListFromLs = () => {
    const data = JSON.parse(localStorage.getItem('wishList'));
    return data
}