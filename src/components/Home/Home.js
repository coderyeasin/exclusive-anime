import React from 'react';
import Anime from '../Anime/Anime';
import HeroArea from './HeroArea/HeroArea';
import Navbar from './Navbar/Navbar';

const Home = () => {
    return (
      <div>
        <Navbar />
        <HeroArea />

        {/* <Anime /> */}
      </div>
    );
};

export default Home;