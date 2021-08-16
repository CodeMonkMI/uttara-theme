import { Container } from 'components/styles/Container.styled';
import { SubTitle, Title } from 'components/styles/Section.styled';
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

  return (
    <div className={style.root}>
      <Container>
        {isHome && (
          <>
            <SubTitle align='center'>Latest News</SubTitle>
            <Title align='center'>University Latest Blog</Title>
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
      </Container>
    </div>
  );
};

export default Blogs;
