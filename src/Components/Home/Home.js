import './Home.css';
import { GiHamburgerMenu } from 'react-icons/gi';

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <div className="expand text-right pr-10 pt-10">
                <h1 className='text-3xl'>Menu</h1>
                <Link to='/dashboard'><button className='mr-3'><GiHamburgerMenu size={50}></GiHamburgerMenu></button></Link>
            </div>
        </div>
    );
};

export default Home;