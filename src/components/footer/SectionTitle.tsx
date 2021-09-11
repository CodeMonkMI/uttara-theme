import React from 'react';

const SectionTitle: React.FC<{ title: string }> = ({ title }) => {
  return <h4 className='text-white text-2xl mb-7'>{title}</h4>;
};

export default SectionTitle;
