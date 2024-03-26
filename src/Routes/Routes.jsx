import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Root from '../Components/Root/Root';
import ListedBooks from '../Components/ListedBooks/ListedBooks';
import PagesToRead from '../Components/PagesToRead/PagesToRead';
import NewReleased from '../Components/NewReleased/NewReleased';
import ReviewClub from '../Components/ReviewClub/ReviewClub';
import BookDetails from '../Components/BookDetails/BookDetails';
import BookDetail from '../Components/Book/BookDetail';
import WishListBooks from '../Components/WishListBooks/WishListBooks';
import ReadBooks from '../Components/ReadBooks/ReadBooks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        
      },
      {
        path: '/listed-books',
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element:<ReadBooks></ReadBooks>
          },
          {
            path: '/listed-books/wish-list',
            element: <WishListBooks></WishListBooks>
          }
        ]
      },
      {
        path: '/book-details/:id',
        element: <BookDetail></BookDetail>
      },

      {
        path: '/pages-read',
        element: <PagesToRead></PagesToRead>
      },
      {
        path: '/new-released',
        element: <NewReleased></NewReleased>

      },
      {
        path: '/review-club',
        element: <ReviewClub></ReviewClub>
      }
    ]
  },
]);

export { router }; 
