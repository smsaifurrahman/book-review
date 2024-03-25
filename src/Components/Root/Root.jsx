import React from 'react';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='container mx-auto my-6'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;