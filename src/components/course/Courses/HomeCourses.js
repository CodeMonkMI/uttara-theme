import { Container } from 'components/styles/Container.styled';
import { SubTitle, Title } from 'components/styles/Section.styled';
import data from 'data/Courses';
import Bg from 'images/course/background.png';
import React, { useEffect, useState } from 'react';
import { generate as shortid } from 'shortid';
import MixItUp from '../MixItUp/MixItUp';
const HomeCourses = () => {
  const menus = [
    {
      id: shortid(),
      value: 'All Courses',
      slug: 'all',
    },
    {
      id: shortid(),
      value: 'Data Science & Analytics',
      slug: 'dsa',
    },
    {
      id: shortid(),
      value: 'Computer Science',
      slug: 'cs',
    },
    {
      id: shortid(),
      value: 'Foreign Language',
      slug: 'fl',
    },
  ];

  const [courses, setCourses] = useState([]);

  useEffect(() => setCourses(data), []);

  return (
    <div
      className='py-24 bg-cover bg-center bg-no-repeat'
      style={{
        background: `linear-gradient(#3e7eecd9 , #3e7eecd9) , url(${Bg})`,
      }}
    >
      <Container>
        <SubTitle align='center' white>
          Browse Categories
        </SubTitle>
        <Title align='center' white>
          Pick a Course to Get Started
        </Title>
        <MixItUp menus={menus} items={courses} />
      </Container>
    </div>
  );
};

export default HomeCourses;
