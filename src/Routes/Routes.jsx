import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Root from '../Components/Root/Root';
import ListedBooks from '../Components/ListedBooks/ListedBooks';
import PagesToRead from '../Components/PagesToRead/PagesToRead';
import NewReleased from '../Components/NewReleased/NewReleased';
import ReviewClub from '../Components/ReviewClub/ReviewClub';

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
        element: <ListedBooks></ListedBooks>
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
