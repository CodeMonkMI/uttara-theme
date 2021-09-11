import { OutlineButton } from 'components/styles/Buttons.styled';
import React from 'react';
import './CourseBox.css';
interface CourseProperty {
  image: string;
  categories: string[];
  title: string;
  time: string;
  stars: number[];
  price: string;
  url: string;
}
const CourseBox: React.FC<CourseProperty> = ({
  image,
  categories,
  title,
  time,
  stars,
  price,
  url,
}) => {
  return (
    <div className='box-border py-2 px-5 w-full '>
      <div className='bg-white rounded-md pb-4 shadow-md overflow-hidden'>
        <div
          className='h-44 bg-cover bg-no-repeat box-border p-5'
          style={{ backgroundImage: `url(${image})` }}
        >
          <ul className='flex'>
            {categories.map((cat: string) => (
              <li
                className='text-white py-1 px-3 mr-1 rounded-md courseBox__starItem'
                key={cat}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        <div className='py-3 px-5'>
          <h1 className='text-black text-xl py-3'>{title}</h1>
          <div className='my-3 border-t border-dashed border-gray-400 pt-3 flex justify-between items-center'>
            <span>{time}</span>
            <ul className='flex '>
              {stars.map(() => (
                <li
                  className='text-red-600 text-2xl mr-2 last:mr-0'
                  key={Math.random()}
                >
                  &#10032;
                </li>
              ))}
            </ul>
          </div>
          <div className='flex items-center justify-between mt-5'>
            <span className='bg-red-300 font-bold text-red-600 py-3 px-5 rounded-3xl text-base tracking-wide'>
              &#36;{parseFloat(price)}
            </span>
            <OutlineButton borderSize={3} as='a' href={url}>
              Details
            </OutlineButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBox;
