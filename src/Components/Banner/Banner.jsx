import React from 'react';
import bannerImg from '../../assets/banner.jpg'
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div>
    <div className="hero min-h-screen bg-base-200 mt-10">
    <div className="hero-content flex-col lg:flex-row-reverse lg:gap-20">
        <img src={bannerImg} className=" rounded-lg w-[250px] lg:w-[400px]  shadow-2xl" />
        <div>
        <h1 className=" text-2xl lg:text-5xl font-bold">Books to freshen up <br />
       your bookshelf</h1>
        
      <Link to={'/listed-books'}><button className="btn bg-[#23BE0A] text-white p-4 p mt-8">View the List</button></Link>
        </div>
    </div>
</div>
        </div>
    );
};

export default Banner;