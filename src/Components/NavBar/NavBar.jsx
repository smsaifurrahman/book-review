import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <NavLink to='/' className={({isActive}) => isActive ? 'text-primary font-bold text-xl bg-green-500 p-2 rounded-xl' : 'font-bold p-2 text-xl rounded-xl border-2 border-green-300'}>Home</NavLink>
                    <NavLink to='/listed-books' className={({isActive}) => isActive ? 'text-primary font-bold bg-green-500 text-xl p-2 rounded-xl' : 'font-bold text-xl p-2 rounded-xl border-2 border-green-300'}>Listed Books</NavLink>
                    <NavLink to='/pages-read' className={({isActive}) => isActive ? 'text-primary font-bold bg-green-500 text-xl p-2 rounded-xl' : 'font-bold text-xl p-2 rounded-xl border-2 border-green-300'}>Pages to Read</NavLink>
                    <NavLink to='/new-released' className={({isActive}) => isActive ? 'text-primary font-bold bg-green-500 text-xl p-2 rounded-xl' : 'font-bold text-xl p-2 rounded-xl border-2 border-green-300'}>New Released</NavLink>
                    <NavLink to='/review-club' className={({isActive}) => isActive ? 'text-primary font-bold bg-green-500 text-xl p-2 rounded-xl' : 'font-bold text-xl p-2 rounded-xl border-2 border-green-300'}>Review Club</NavLink>
                </ul>
                </div>
                <Link to={'/'}><a  className="btn btn-ghost text-xl font-bold">Book Vibe</a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-4">
               
               
                
                    <NavLink to='/' className={({isActive}) => isActive ? 'text-primary font-bold text-xl bg-green-500 p-2 rounded-xl' : 'font-bold p-2 text-xl rounded-xl border-2 border-green-300'}>Home</NavLink>
                    <NavLink to='/listed-books' className={({isActive}) => isActive ? 'text-primary font-bold bg-green-500 text-xl p-2 rounded-xl' : 'font-bold text-xl p-2 rounded-xl border-2 border-green-300'}>Listed Books</NavLink>
                    <NavLink to='/pages-read' className={({isActive}) => isActive ? 'text-primary font-bold bg-green-500 text-xl p-2 rounded-xl' : 'font-bold text-xl p-2 rounded-xl border-2 border-green-300'}>Pages to Read</NavLink>
                    <NavLink to='/new-released' className={({isActive}) => isActive ? 'text-primary font-bold bg-green-500 text-xl p-2 rounded-xl' : 'font-bold text-xl p-2 rounded-xl border-2 border-green-300'}>New Released</NavLink>
                    <NavLink to='/review-club' className={({isActive}) => isActive ? 'text-primary font-bold bg-green-500 text-xl p-2 rounded-xl' : 'font-bold text-xl p-2 rounded-xl border-2 border-green-300'}>Review Club</NavLink>





                {/* <li> <NavLink to={'/listed-books'}>Listed Books</NavLink> </li>
                <li> <NavLink to={'/pages-read'}>Pages to Read</NavLink> </li>
                <li> <NavLink to={'/pages-read'}>New Released</NavLink> </li>
                <li> <NavLink to={'/pages-read'}>Review Club</NavLink> </li>
                 */}
               
              
                </ul>
            </div>
            <div className="navbar-end text-white">
                <a className="btn bg-[#23BE0A] text-white">Sign In </a>
                <a className="btn bg-[#59C6D2] text-white ml-2">Sign Up</a>
            </div>
            </div>
                    </div>
                );
};

export default NavBar;