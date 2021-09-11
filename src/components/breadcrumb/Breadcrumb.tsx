import Background from 'images/breadcrumb/1.png';
import React, { useEffect } from 'react';

const Breadcrumb: React.FC<{ title: string }> = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div
      className='bg-cover bg-center bg-no-repeat h-72 flex justify-center items-center'
      style={{
        background: `linear-gradient(90deg, #3580ebe6 , #3580ebe6) , url(${Background})`,
      }}
    >
      <h2 className='text-5xl text-white'>{title}</h2>
    </div>
  );
};

export default Breadcrumb;
