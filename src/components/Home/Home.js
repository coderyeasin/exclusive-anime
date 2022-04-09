import React from 'react';
import HeroArea from './HeroArea/HeroArea';
import Movies from './Movies/Movies';
import Navbar from './Navbar/Navbar';

const Home = () => {
    return (
      <div>
        <Navbar />
        <HeroArea />
        <Movies />
      </div>
    );
};

export default Home;