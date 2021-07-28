import data from 'data/Courses';
import React, { useEffect, useState } from 'react';
import CourseBox from '../shared/CourseBox';
import style from './AllCourses.module.css';

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
    <div className={style.root}>
      <div className='container'>
        <div className={style.allCourses}>
          {courses.map((course) => (
            <CourseBox
              key={course.id}
              image={course.image}
              categories={course.categories}
              price={course.price}
              stars={course.stars}
              title={course.title}
              time={course.time}
              url={course.url}
            />
          ))}
        </div>
        <div className={style.pagination}>
          <ul className={style.list}>
            <button
              className={style.item}
              key={Math.random()}
              onClick={() => setCurrent(current - 1)}
              disabled={current === 1}
            >
              <i className='fas fa-angle-double-left'></i>
            </button>
            {pagesArray.map((no) => (
              <li
                className={`${style.item} ${
                  current === no ? style.active : ''
                }`}
                key={Math.random()}
                onClick={() => setCurrent(no)}
              >
                {no}
              </li>
            ))}
            <button
              className={style.item}
              key={Math.random()}
              onClick={() => setCurrent(current + 1)}
              disabled={current === totalPage}
            >
              <i className='fas fa-angle-double-right'></i>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
