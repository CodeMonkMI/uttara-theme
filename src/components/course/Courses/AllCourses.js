import { Container } from 'components/styles/Container.styled';
import data from 'data/Courses';
import React, { useEffect, useState } from 'react';
import CourseBox from '../shared/CourseBox';

const AllCourses = () => {
  const [current, setCurrent] = useState(1);
  // const [perPage, setPerPage] = useState(9); // if you want get input of item per page from user
  const perPage = 9;
  const [allCourses, setAllCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [pagesArray, setPageArray] = useState([]);

  useEffect(() => setAllCourses(data), []);

  useEffect(() => {
    const selectFrom = perPage * current - perPage;
    const newData = allCourses.slice(selectFrom, selectFrom + perPage);
    setCourses(newData);
  }, [allCourses, perPage, current]);

  useEffect(() => {
    const no = allCourses.length / perPage;
    setTotalPage(Math.ceil(no));
  }, [allCourses, perPage]);

  useEffect(() => {
    const arr = [];
    for (let i = 1; i <= totalPage; i++) {
      arr.push(i);
    }
    setPageArray(arr);
  }, [totalPage]);

  return (
    <div>
      <Container>
        <div className='sm:flex flex-wrap mt-36'>
          {courses.map((course) => (
            <div className='w-full sm:w-1/2 xl:w-1/3 2xl:h-1/4' key={course.id}>
              <CourseBox
                image={course.image}
                categories={course.categories}
                price={course.price}
                stars={course.stars}
                title={course.title}
                time={course.time}
                url={course.url}
              />
            </div>
          ))}
        </div>
        <div className='py-8'>
          <ul className='flex flex-wrap justify-center'>
            <button
              className='pagination-btn'
              key={Math.random()}
              onClick={() => setCurrent((prevCurrent) => prevCurrent - 1)}
              disabled={current === 1}
            >
              <i className='fas fa-angle-double-left'></i>
            </button>
            {pagesArray.map((no) => (
              <li
                className={`pagination-btn   ${
                  current === no ? 'pagination-btn-active' : ''
                }`}
                key={Math.random()}
                onClick={() => setCurrent(no)}
              >
                {no}
              </li>
            ))}
            <button
              className='pagination-btn'
              key={Math.random()}
              onClick={() => setCurrent((prevCurrent) => prevCurrent + 1)}
              disabled={current === totalPage}
            >
              <i className='fas fa-angle-double-right'></i>
            </button>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default AllCourses;
