import React from 'react';
import Anime from '../Anime/Anime';
import HeroArea from './HeroArea/HeroArea';
import Movies from './Movies/Movies';
import Navbar from './Navbar/Navbar';

const Home = () => {
    return (
      <div>
        <Navbar />
        <HeroArea />
        <Movies />
        {/* <Anime /> */}
      </div>
    );
};

export default Home;