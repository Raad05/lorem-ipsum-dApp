import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className='home relative'>
            <div className="dashboard w-1/4 bg-black/50  text-white absolute right-40 top-40 px-5 pb-20 rounded">
                <h1 className='font-bold text-3xl my-10 text-center'>DASHBOARD</h1>
                <Link to='/login'>
                    <button className='btn-wide btn-dashboard font-bold block m-auto py-5 text-2xl mb-10 rounded'>Login</button>
                </Link>
                <button className='btn-wide btn-dashboard font-bold block m-auto py-5 text-2xl mb-10 rounded'>About us</button>
                <Link to='/signup'>
                    <button className='btn-wide btn-dashboard font-bold block m-auto py-5 text-2xl mb-10 rounded'>Sign Up</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;