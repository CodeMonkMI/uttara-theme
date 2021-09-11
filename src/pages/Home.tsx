import About from 'components/about/About';
import Blogs from 'components/blog/Blogs';
import Campus from 'components/campus/Campus';
import HomeCourses from 'components/course/Courses/HomeCourses';
import AllFeaturedCourses from 'components/course/featured/AllFeaturedCourses';
import Facility from 'components/facility/Facility';
import Fact from 'components/fact/Fact';
import Hero from 'components/hero/Hero';
import Instructor from 'components/instructor/Instructor';
import Testimonials from 'components/testimonial/Testimonials';
import Why from 'components/why/Why';
import React, { useEffect } from 'react';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <>
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
      <Blogs isHome />
    </>
  );
};

export default Home;
