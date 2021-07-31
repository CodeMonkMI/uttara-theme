import data from 'data/Blogs';
import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import style from './Blogs.module.css';
const Blogs = ({ isHome }) => {
  const [blogs, setBlogs] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);

  const [current, setCurrent] = useState(1);
  // const [perPage, setPerPage] = useState(9); // if you want get input of item per page from user
  const perPage = 6;
  const [totalPage, setTotalPage] = useState(1);
  const [pagesArray, setPagesArray] = useState([]);

  useEffect(() => setAllBlogs(data), []);

  useEffect(() => {
    if (!isHome) {
      const selectFrom = perPage * current - perPage;
      const slicedBlog = allBlogs.slice(selectFrom, selectFrom + perPage);
      setBlogs(slicedBlog);
    } else {
      setBlogs(allBlogs.slice(0, 2));
    }
  }, [allBlogs, isHome, perPage, current]);

  useEffect(
    () => setTotalPage(Math.ceil(allBlogs.length / perPage)),
    [perPage, allBlogs]
  );

  useEffect(() => {
    const arr = [];
    for (let i = 1; i <= totalPage; i++) {
      arr.push(i);
    }
    setPagesArray(arr);
  }, [totalPage]);

  useEffect(() => {
    console.log({ current, perPage, totalPage, pagesArray });
  }, [current, perPage, totalPage, pagesArray]);

  return (
    <div className={style.root}>
      <div className='container'>
        {isHome && (
          <>
            <h4 className={style.subTitle}>Latest News</h4>
            <h2 className={style.title}>University Latest Blog</h2>
          </>
        )}

        <div className={style.all + ` ${isHome ? style.isHome : ''}`}>
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
              title={blog.title}
              text={blog.text}
              image={blog.image}
              postedBy={blog.postedBy}
              date={blog.date}
              url={blog.url}
            />
          ))}
        </div>
        {!isHome && (
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
        )}
      </div>
    </div>
  );
};

export default Blogs;
