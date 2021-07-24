import About from 'components/about/About';
import Campus from 'components/campus/Campus';
import HomeCourses from 'components/course/Courses/HomeCourses';
import AllFeaturedCourses from 'components/course/featured/AllFeaturedCourses';
import Facility from 'components/facility/Facility';
import Fact from 'components/fact/Fact';
import Header from 'components/header/Header';
import Hero from 'components/hero/Hero';
import Instructor from 'components/instructor/Instructor';
import Testimonials from 'components/testimonial/Testimonials';
import Why from 'components/why/Why';
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
      <Why />
      <HomeCourses />
      <Testimonials />
      <Instructor />
    </div>
  );
};

export default Home;
