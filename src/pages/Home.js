import About from 'components/about/About';
import Campus from 'components/campus/Campus';
import AllFeaturedCourses from 'components/course/featured/AllFeaturedCourses';
import Facility from 'components/facility/Facility';
import Fact from 'components/fact/Fact';
import Header from 'components/header/Header';
import Hero from 'components/hero/Hero';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Facility />
      <About />
      <AllFeaturedCourses />
      <Fact />
      <Campus />
    </div>
  );
};

export default Home;
