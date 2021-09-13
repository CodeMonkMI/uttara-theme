import { Container } from 'components/styles/Container.styled';
import { SubTitle, Title } from 'components/styles/Section.styled';
import data from 'data/Blogs';
import React, { useEffect, useState } from 'react';
import Blog from './Blog';

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
    <div className='py-24 bg-gray-200'>
      <Container>
        {isHome && (
          <>
            <SubTitle align='center'>Latest News</SubTitle>
            <Title align='center'>University Latest Blog</Title>
          </>
        )}

        <div className={`sm:flex flex-wrap`}>
          {blogs.map((blog) => (
            <div
              className={`px-3 box-border box border w-full sm:w-1/2 ${
                isHome ? 'mb-5 last:mb-0' : ''
              } `}
              key={blog.id}
            >
              <Blog
                title={blog.title}
                text={blog.text}
                image={blog.image}
                postedBy={blog.postedBy}
                date={blog.date}
                url={blog.url}
              />
            </div>
          ))}
        </div>

        {!isHome && (
          <div className='pt-16 pb-8'>
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
        )}
      </Container>
    </div>
  );
};

export default Blogs;
